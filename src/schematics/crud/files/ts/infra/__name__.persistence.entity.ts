import { Entity } from 'typeorm'
import { MinimalEntity } from '@guachos/nestjs-typeorm-data-access'

@Entity('<%= lowerCase(name) %>')
export class <%= classify(name) %>Persistence extends MinimalEntity {

    //custom props typeorm persistence
}
