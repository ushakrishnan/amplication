import { Field, ObjectType } from '@nestjs/graphql';
import { Entity } from './Entity'; // eslint-disable-line import/no-cycle
import { Organization } from './Organization'; // eslint-disable-line import/no-cycle
import { Build } from '../core/build/dto/Build'; // eslint-disable-line import/no-cycle
import { Environment } from '../core/environment/dto/Environment'; // eslint-disable-line import/no-cycle

@ObjectType({
  isAbstract: true,
  description: undefined
})
export class App {
  @Field(() => String, {
    nullable: false,
    description: undefined
  })
  id!: string;

  @Field(() => Date, {
    nullable: false,
    description: undefined
  })
  createdAt!: Date;

  @Field(() => Date, {
    nullable: false,
    description: undefined
  })
  updatedAt!: Date;

  organization?: Organization;

  @Field(() => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

  @Field(() => String, {
    nullable: false,
    description: undefined
  })
  description!: string;

  @Field(() => String, {
    nullable: false,
    description: undefined
  })
  color?: string;

  @Field(() => [Entity], {
    nullable: false,
    description: undefined
  })
  entities?: Entity[];

  @Field(() => [Environment], {
    nullable: false
  })
  environments?: Environment[];

  @Field(() => [Build], {
    nullable: false,
    description: undefined
  })
  builds?: Build[];
}
