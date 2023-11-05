import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { Book } from './book.entity';
import { Author } from './author.entity';

@Resolver(() => Author)
export class AuthorResolver {

  constructor(private readonly booksService: BooksService) {}

  @ResolveField(() => Author)
  books(@Parent() author: Author): Book[] {
    return this.booksService.findByAuthorId(author.id);
  }
}
