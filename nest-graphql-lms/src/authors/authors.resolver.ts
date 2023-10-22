import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthorsService } from './authors.service';
import { Author } from './author.entity';
import { CreateAuthorInput, UpdateAuthorInput } from './author.input';

@Resolver(() => Author)
export class AuthorsResolver {

  constructor(private readonly authorsService: AuthorsService) {}

  @Query(() => [Author], { name: 'getAuthors' })
  async findAll(): Promise<Author[]> {
    return this.authorsService.findAll();
  }

  @Query(() => Author, { name: 'getAuthor' })
  async findOne(@Args('id') id: string): Promise<Author> {
    return this.authorsService.findOne(id);
  }

  @Mutation(() => Author)
  async createAuthor(@Args('createAuthorInput') createAuthorInput: CreateAuthorInput): Promise<Author> {
    return this.authorsService.create(createAuthorInput);
  }

  @Mutation(() => Author)
  updateAuthor(@Args('updateAuthorInput') updateAuthorInput: UpdateAuthorInput) {
    return this.authorsService.update(updateAuthorInput.id, updateAuthorInput);
  }

  @Mutation(() => Author)
  removeAuthor(@Args('id') id: string): void {
    this.authorsService.remove(id);
  }
}
