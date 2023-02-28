import { Entity} from 'typeorm'
import { BasePersistentEntity } from "../../../../../common/modules/data-access/typeorm/base.persistent.entity";

@Entity('<%= lowerCase(name) %>')
export class <%= classify(name) %>Persistence extends BasePersistentEntity {

    //custom props typeorm persistence
}
