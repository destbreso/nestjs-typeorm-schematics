import { IntersectionType, PartialType } from "@nestjs/swagger";
import { BaseView } from "@guachos/nestjs-typeorm-recipes";
import { <%= classify(name) %>Domain } from "../../domain/<%= lowerCase(name) %>.domain.entity";
import { Create<%= classify(name) %>Dto } from "./<%= lowerCase(name) %>.create.dto";

export class <%= classify(name) %>View extends IntersectionType(
  PartialType(Create<%= classify(name) %>Dto),
  BaseView) {

  // custom decorated properties

  constructor(domain: <%= classify(name) %>Domain) {
    super(domain)

    // custom view
    // example
    // Object.assign(this, domain.shallowCopy()) // this copy all props
  }
}