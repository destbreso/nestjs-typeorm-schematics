import { <%= classify(name) %>Persistence } from "./<%= lowerCase(name) %>.persistence.entity";
import { <%= classify(name) %>Domain } from "../domain/<%= lowerCase(name) %>.domain.entity";
import { IEntityMapper } from "@gds-core/gds-core";

export class <%= classify(name) %>Mapper extends IEntityMapper<<%= classify(name) %>Domain, <%= classify(name) %>Persistence>{
    public static PersistToDomain(persistence: <%= classify(name) %>Persistence): <%= classify(name) %>Domain {
        const props = {
            createdAt: persistence.createdAt,
            updatedAt: persistence.updatedAt,
            deletedAt: persistence.deletedAt

            //custom props mapping
        }

        const domain = <%= classify(name) %>Domain.prototype.Create(props, persistence.id)

        //esto no debe pasar
        if (domain.isFailure) {
            throw new Error(domain.unwrapError().message)
        }

        return domain.unwrap()
    }

    public static DomainToPersist(domain: <%= classify(name) %>Domain): Partial<<%= classify(name) %>Persistence> {
        return {
            id: domain.id,
            createdAt: domain.createdAt,
            updatedAt: domain.updatedAt,
            deletedAt: domain.deletedAt

            //custom props mapping
        }
    }
}
