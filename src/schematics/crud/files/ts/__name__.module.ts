import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { <%= classify(name) %>Persistence } from "./infra/<%= lowerCase(name) %>.persistence.entity";
import { <%= classify(name) %>Repository } from "./infra/<%= lowerCase(name) %>.repository";
import { <%= classify(name) %>Controller } from "./<%= lowerCase(name) %>.controller";
import { <%= classify(name) %>Service } from './<%= lowerCase(name) %>.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([<%= classify(name) %>Persistence])],
    providers: [
        <%= classify(name) %>Repository,
        <%= classify(name) %>Service],
    controllers: [
        <%= classify(name) %>Controller
    ],
    exports: [],
})
export class <%= classify(name) %>Module {
}
