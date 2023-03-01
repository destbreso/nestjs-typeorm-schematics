import { Injectable } from "@nestjs/common";
import { BuildCRUDRepository } from "@guachos/nestjs-typeorm-recipes";
import { <%= classify(name) %>Domain } from "../domain/<%= lowerCase(name) %>.domain.entity";
import { <%= classify(name) %>Persistence } from "./<%= lowerCase(name) %>.persistence.entity";
import { <%= classify(name) %>Mapper } from "./<%= lowerCase(name) %>.mapper";

@Injectable()
export class <%= classify(name) %>Repository
    extends BuildCRUDRepository<<%= classify(name) %>Domain, <%= classify(name) %>Persistence, <%= classify(name) %>Mapper>(
        <%= classify(name) %>Persistence,
        <%= classify(name) %>Mapper
    ) {
}
