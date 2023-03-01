<h1 align="center"></h1>

<div align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="150" alt="Nest Logo" />
  </a>
</div>

<h3 align="center">NestJS CLI Schematics for Custom resources Generation</h3>

<h4 align="center">(over typeorm persistence layer)</h4>

<div align="center">
  <a href="https://nestjs.com" target="_blank">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="License" />
    <img src="https://badge.fury.io/js/%40nestjsplus%2Fdyn-schematics.svg" alt="npm version" height="18">
    <img src="https://img.shields.io/badge/built%20with-NestJs-red.svg" alt="Built with NestJS">
  </a>
</div>

### Overview

This package contains a set of [NestJS CLI](https://docs.nestjs.com/cli/overview) schematics for generating custom resources for a nestjs projectm using typeorm persistent layer
  * fully functional and swagger integrated CRUD module. 

> **NOTE**: Code generated by this schematics uses private modules, so this solution is not fully open source...for now

> **TRHANKS!**: This solution is inspired in [this article](https://dev.to/nestjs/advanced-nestjs-how-to-build-completely-dynamic-nestjs-modules-1370), and [this](https://github.com/Comerick/Nestjs-template-schematics.git), and [this](https://github.com/nestjsplus/dyn-schematics) repos

See [below](#dynamic-package-generation) for a description of the use cases.

### Installation

Install the package as **dev** dependencies below.  Due to the implementation of the NestJS CLI, the package **can be** **global** or **dev**.

```bash
npm install -D @guachos/nestjs-typeorm-schematics"
```

### Dynamic Package Generation

Currently, there are only one case supported, with a corresponding schematic:

1. Adding a generated CRUD module *to an existing NestJS project*. In this case, the module is created in its own folder, and is wired in to the existing project using appropriate module metadata, includes, etc.  This schematic works much like Nest's built-in `module` schematic, but creates a fully implemented *CRUD module with Swagger integration* and this schematics is based on generated entities.

### Nest CLI

These schematics are built on top of the [Nest CLI](https://docs.nestjs.com/cli/usages) infrastructure, so their usage is exactly as documented on that page.

> Note: since these schematics are built on top of the Nest CLI, all of the optional arguments (such as specifying an optional path in which to generate the code) and options (such as `--dry-run`, `--flat`) are available.  Currently, however, the schematics always  generate spec files.
<!-- 
### Use-case #1: Generating a standalone package

The following step will create a new folder using `<pkg-name>`, which will contain the standalone package files and folders for your new dynamic module package.

#### Verify generated package

If you answered `yes` to the prompt `Generate a testing client?`, a small testing module was automatically generated called `<pkg-name>ClientModule`.  You can test that the template was properly generated by running:

```bash
npm run start:dev
```

Then browse to [http://localhost:3000](http://localhost:3000).  Your browser should display `Hello from <pkg-name>Module!`.

#### Optionally publish package

The `package.json` and `tsconfig.json` files are generated according to the process described [in this article](https://dev.to/nestjs/publishing-nestjs-packages-with-npm-21fm).  This means that publishing the package to npm is as simple as:
1. updating the `package.json` with your author information, etc.
2. running `npm publish`

See [the npm packaging](https://dev.to/nestjs/publishing-nestjs-packages-with-npm-21fm) article for more information. -->

#### Use the `crud` schematic

```bash
nest g -c @guachos/nestjs-typeorm-schematics crud <module-name> <destination-path>
```

- `crud` is the name of the schematic used to generate a new CRUD module (which will be added to your existing project).
- `<module-name>` is the name of the new module you're building.
- `<destination-path>` is the path where the new module will be generated

> **TIP:** You can simply type `nest g -c @guachos/nestjs-typeorm-schematics crud` and follow the prompt instructions

The schematic adds the new module in a folder named `<module-name>`.  Just like using the built-in module schematic (e.g., `nest g module myNewModule`), this will add the generated module to the imports list of your root module with the appropriate metadata and includes.  At this point, you can customize the generated module as needed.

### Customizing

The files in the project have comments that should help guide you.

#### More help

You can also refer to these articles:

[Schematics — An Introduction](https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2)


[How to build completely dynamic NestJS mdoules](https://dev.to/nestjs/advanced-nestjs-how-to-build-completely-dynamic-nestjs-modules-1370) - for details on the concepts behind the *dynamic module pattern*.

[Built a NestJS module for Knex.js in 5 minutes](https://dev.to/nestjs/build-a-nestjs-module-for-knex-js-or-other-resource-based-libraries-in-5-minutes-12an) - an end-to-end tutorial on using these schematics.

[Use Angular Schematics to Simplify Your Life](https://developer.okta.com/blog/2019/02/13/angular-schematics)

[Extend Angular Schematics to customize your development process](https://indepth.dev/posts/1438/extend-angular-schematics-to-customize-your-development-process)

[How to create your own Angular Schematics](https://javascript-conference.com/blog/how-to-create-your-own-angular-schematics)


### Change Log

See [Changelog](CHANGELOG.md) for more information.


### Author
**David Estevez**

### License

Licensed under the MIT License - see the [LICENSE](LICENSE) file for details.