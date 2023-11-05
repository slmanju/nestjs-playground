import { Resolver, Query, Args, Int, ResolveReference, ResolveField, Parent } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { Book } from './book.entity';
import { Author } from './author.entity';

@Resolver(() => Book)
export class BooksResolver {

  constructor(private readonly booksService: BooksService) {}

  @Query(() => [Book], { name: 'books' })
  findAll() {
    return this.booksService.findAll();
  }

  @Query(() => Book, { name: 'book' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.booksService.findOne(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }): Book {
    return this.booksService.findOne(reference.id);
  }

  @ResolveField(() => Author)
  author(@Parent() book: Book): any {
    return { __typename: 'Author', id: book.authorId };
  }
}
