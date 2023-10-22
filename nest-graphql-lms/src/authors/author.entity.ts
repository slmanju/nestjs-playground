import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Author {
  @Field()
  id: string;
  @Field()
  firstName: string;
  @Field()
  lastName: string;
}
