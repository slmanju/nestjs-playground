import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class CreateAuthorInput {
  @Field()
  firstName: string;
  @Field()
  lastName: string;
}

@InputType()
export class UpdateAuthorInput extends PartialType(CreateAuthorInput) {
  @Field()
  id: string;
}