import { PartialType } from '@nestjs/swagger'
import { Update<%= classify(name) %>Props } from '../../domain/<%= lowerCase(name) %>.domain.entity'
import { Create<%= classify(name) %>Dto } from './<%= lowerCase(name) %>.create.dto'

export class Update<%= classify(name) %>Dto
  extends PartialType(Create<%= classify(name) %>Dto)
  implements Update<%= classify(name) %>Props { }
