import { Entity } from 'typeorm'
import { MinimalEntity } from '@nestjs-data-access/nestjs-data-access'

@Entity('<%= lowerCase(name) %>')
export class <%= classify(name) %> Persistence extends MinimalEntity {

    //custom props typeorm persistence
}
