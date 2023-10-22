import { Field, HideField, Int, ObjectType } from "@nestjs/graphql";
import { Author } from "src/authors/author.entity";

@ObjectType()
export class Book {
  @Field()
  id: string;
  @Field()
  title: string;
  @Field(() => Int)
  price: number
  @Field({ nullable: true })
  description?: string;
  @Field({ nullable: true })
  author?: Author;
  @HideField()
  authorId?: string;
}