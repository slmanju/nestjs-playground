import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Author {

  @Field(() => ID!)
  id: number;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;
}
