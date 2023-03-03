import {
    UniqueEntityID,
    DomainEntity,
    TimestampGetters,
    TimestampProps,
    DomainInternalProps,
    AddDomainGetters,
    DeepPartial,
    Result,
} from '@guachos/api-core';

type <%= classify(name) %>Props =
    TimestampProps & {
        //custom props
    };

export type New<%= classify(name) %>Props = Omit<<%= classify(name) %>Props, keyof DomainInternalProps>;

export type Update<%= classify(name) %>Props = DeepPartial<New<%= classify(name) %>Props>

interface DomainGetters extends
    TimestampGetters {
    //custom getters
}

export interface <%= classify(name) %>Domain extends DomainGetters {
} //TRICK: add getters to type system via interface merging


@AddDomainGetters()
export class <%= classify(name) %>Domain extends DomainEntity<<%= classify(name) %>Props> {

    public New(props: New<%= classify(name) %>Props): Result<<%= classify(name) %>Domain> {
        const ans: Result<<%= classify(name) %>Domain> = this.Create({
            ...props,
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null
        });
        if (ans.isFailure) return Result.Fail(ans.unwrapError());

        return Result.Ok(ans.unwrap());
    }

    public Create(props: <%= classify(name) %>Props, id?: string): Result<<%= classify(name) %>Domain> {
        //custom create guards
        // example:
        // const shortNameOrError = Guard.againstAtLeast({
        //     argumentPath: 'alpha2',
        //     numChars: 2,
        //     argument: props.alpha2
        // });

        // if (!shortNameOrError.succeeded) {
        //     return Result.Fail(new AppError.ValidationError(shortNameOrError.message))
        // }
        return Result.Ok(new <%= classify(name) %>Domain(props, new UniqueEntityID(id)));
    }

    public update(props: Update<%= classify(name) %>Props): Result<<%= classify(name) %>Domain> {
        //custom props update

        this.props.updatedAt = new Date();

        return <%= classify(name) %>Domain.prototype.Create(this.props, this.id)
    }

}