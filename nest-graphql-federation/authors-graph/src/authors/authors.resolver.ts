import { Resolver, Query, Args, Int, ResolveReference } from '@nestjs/graphql';
import { AuthorsService } from './authors.service';
import { Author } from './author.entity';

@Resolver(() => Author)
export class AuthorsResolver {

  constructor(private readonly authorsService: AuthorsService) {}

  @Query(() => [Author], { name: 'authors' })
  findAll(): Author[] {
    return this.authorsService.findAll();
  }

  @Query(() => Author, { name: 'author' })
  findOne(@Args('id', { type: () => Int }) id: number): Author {
    return this.authorsService.findOne(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }): Author {
    return this.authorsService.findOne(reference.id);
  }
}
