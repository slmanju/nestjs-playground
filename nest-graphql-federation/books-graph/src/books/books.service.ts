import { Injectable } from '@nestjs/common';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
  private books: Book[] = [
    { id: 1, title: 'Nest', authorId: 1 },
    { id: 2, title: 'Node', authorId: 1 },
    { id: 3, title: 'GraphQL', authorId: 2 },
  ];

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book {
    return this.books.find((book) => book.id == id);
  }

  findByAuthorId(authorId: number): Book[] {
    return this.books.filter((book) => book.authorId == authorId);
  }
}
