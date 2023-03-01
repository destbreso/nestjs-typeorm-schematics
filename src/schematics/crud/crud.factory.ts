import { join, Path, strings } from '@angular-devkit/core';
import {
  apply,
  branchAndMerge,
  chain,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  template,
  Tree,
  url,
} from '@angular-devkit/schematics';

import {
  DeclarationOptions,
  ModuleDeclarator,
} from '../../utils';

import { ModuleFinder } from '../../utils/module.finder';
import { Location, NameParser } from '../../utils/name.parser';
import { mergeSourceRoot } from '../../utils/source-root.helpers';

import { CrudOptions } from './schema';

import {
  lowerCase,
  upperCase,
  dashToUnderscore,
} from '../../utils/string-utils';
import { camelize, classify } from "@angular-devkit/core/src/utils/strings";

export function main(options: CrudOptions): Rule {
  options = transform(options);
  return (tree: Tree, context: SchematicContext) => {
    return branchAndMerge(
      chain([
        mergeSourceRoot(options),
        addDeclarationToModule(options),
        mergeWith(generate(options)),
      ])
    )(tree, context);
  };
}

function transform(options: CrudOptions): CrudOptions {
  const target: CrudOptions = Object.assign({}, options);

  target.metadata = 'imports';
  target.type = 'module';

  const location: Location = new NameParser().parse(target);
  target.name = strings.dasherize(location.name);
  target.path = join(strings.dasherize(location.path) as Path, target.name);
  target.language = 'ts';
  return target;
}

function generate(options: CrudOptions) {
  return (context: SchematicContext) =>
    apply(url(join('./files' as Path, options.language)), [
      template({
        ...strings,
        ...options,
        lowerCase,
        lowercased: (name: string) => {
          const classifiedName = classify(name);
          return (
            classifiedName.charAt(0).toLowerCase() + classifiedName.slice(1)
          );
        },
        upperCase,
        camelize,
        dashToUnderscore,
      }),
      move(options.path),
    ])(context);
}

function addDeclarationToModule(options: CrudOptions): Rule {
  console.log('===', options)
  return (tree: Tree) => {
    if (options.skipImport !== undefined && options.skipImport) {
      return tree;
    }
    options.module = new ModuleFinder(tree).find({
      name: options.name,
      path: options.path as Path,
    });
    if (!options.module) {
      return tree;
    }
    const content = tree.read(options.module).toString();

    console.log('===>',content)
    const declarator: ModuleDeclarator = new ModuleDeclarator();
    // for now, we'll pass in staticOptions using the `register()` method
    // with no default options
    // const staticOptions = { name: 'register', value: {} }; // dont use static options, we dont want module imports like GeneratedModule.register({})
    const declarationOptions = Object.assign({ /*staticOptions*/ }, options);

    tree.overwrite(
      options.module,
      declarator.declare(content, declarationOptions as DeclarationOptions)
    );
    return tree;
  };
}
