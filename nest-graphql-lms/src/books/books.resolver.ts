import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Author } from 'src/authors/author.entity';
import { AuthorsService } from 'src/authors/authors.service';
import { CreateBookInput, UpdateBookInput } from './book.input';
import { Book } from './books.entity';
import { BooksService } from './books.service';

@Resolver(() => Book)
export class BooksResolver {

  constructor(private bookService: BooksService, private authorService: AuthorsService) {}

  @Query(returns => Book, { name: "getBook", nullable: true })
  async findBook(@Args("id") id: string): Promise<Book> {
    return this.bookService.findOne(id);
  }

  @Query(returns => [Book], { name: "getBooks" })
  async findBooks(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Mutation(returns => Book, { name: "createBook" })
  async createBook(@Args('createBookInput') createBookInput: CreateBookInput): Promise<Book> {
    return this.bookService.save(createBookInput);
  }

  @Mutation(() => Book)
  updateBook(@Args('updateBookInput') updateBookInput: UpdateBookInput) {
    return this.bookService.update(updateBookInput.id, updateBookInput);
  }

  @Mutation(() => Book)
  removeBook(@Args('id') id: string) {
    this.bookService.remove(id);
  }

  @ResolveField()
  async author(@Parent() book: Book): Promise<Author> {
    const { authorId } = book;
    return this.authorService.findOne(authorId);
  }
}
