import { Controller } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { <%= classify(name) %>Service } from "./<%= lowerCase(name) %>.service";
import { <%= classify(name) %>View } from "./app/dto/<%= lowerCase(name) %>.view";
import { Create<%= classify(name) %>Dto } from "./app/dto/<%= lowerCase(name) %>.create.dto";
import { Update<%= classify(name) %>Dto } from "./app/dto/<%= lowerCase(name) %>.update.dto";
import { BuildCRUDController } from "@guachos/nestjs-typeorm-recipes";

@ApiTags('<%= classify(name) %> (Generated)') // remove or modify this
@Controller("<%= dasherize(name) %>")
@ApiBearerAuth()
export class <%= classify(name) %>Controller extends BuildCRUDController(
    Create<%= classify(name) %>Dto,
    Update<%= classify(name) %>Dto,
    <%= classify(name) %>View) {
    constructor(private readonly <%= camelize(name) %>Service: <%= classify(name) %>Service) {
        super(<%= camelize(name) %>Service)
    }
}