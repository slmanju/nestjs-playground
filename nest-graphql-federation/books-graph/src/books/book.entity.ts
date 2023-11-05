import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
import { Author } from './author.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class Book {

  @Field(() => ID!)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => Int)
  authorId: number;

  @Field(() => Author, { nullable: true })
  author?: Author
}
