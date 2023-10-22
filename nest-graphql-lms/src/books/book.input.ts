import { Field, InputType, Int, PartialType } from "@nestjs/graphql";

@InputType()
export class CreateBookInput {
  @Field()
  title: string;
  @Field(() => Int)
  price: number
  @Field({ nullable: true })
  description?: string;
  @Field()
  authorId: string;
}

@InputType()
export class UpdateBookInput extends PartialType(CreateBookInput) {
  @Field()
  id: string;
}