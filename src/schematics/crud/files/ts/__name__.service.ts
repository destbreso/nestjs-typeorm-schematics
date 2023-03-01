import { Injectable } from "@nestjs/common";
import { BuildDefaultCrudService } from "@guachos/nestjs-typeorm-recipes";
import { Create<%= classify(name) %>Dto } from "./app/dto/<%= lowerCase(name) %>.create.dto";
import { <%= classify(name) %>View } from "./app/dto/<%= lowerCase(name) %>.view";
import { <%= classify(name) %>Repository } from "./infra/<%= lowerCase(name) %>.repository";

@Injectable()
export class <%= classify(name) %>Service extends BuildDefaultCrudService(
    Create<%= classify(name) %>Dto,
    <%= classify(name) %>View,
) {
    constructor(private readonly repo: <%= classify(name) %>Repository) {
        super(repo)
    }
}