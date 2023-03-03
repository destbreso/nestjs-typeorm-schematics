
import { DtoMapper } from '@guachos/api-core'
import { 
    <%= classify(name) %>Domain, 
    New<%= classify(name) %>Props 
} from '../../domain/<%= lowerCase(name) %>.domain.entity'

export class Create<%= classify(name) %>Dto
    implements New<%= classify(name) %>Props, DtoMapper<<%= classify(name) %>Domain, Create<%= classify(name) %>Dto> {

    //custom decorated properties

    ToDomain(dto: Create<%= classify(name) %>Dto): <%= classify(name) %>Domain {
        const domain = <%= classify(name) %>Domain.prototype.New({
            //custom new properties
        })

        if (domain.isFailure) {
            throw new Error(domain.unwrapError().message)
        }

        return domain.unwrap()
    }
}
