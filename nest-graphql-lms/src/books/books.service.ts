import { Injectable } from '@nestjs/common';
import { CreateBookInput, UpdateBookInput } from './book.input';
import { Book } from './books.entity';

@Injectable()
export class BooksService {
  private books: Book[] = [
    {
      id: '1',
      title: 'title',
      price: 10,
      description: 'description',
      authorId: '100',
    },
    {
      id: '2',
      title: 'title 2',
      price: 6,
      description: 'description 2',
      authorId: '101',
    },
  ];

  findOne(id: string): Book {
    return this.books.find((book) => book.id === id);
  }

  findAll(): Book[] {
    return this.books;
  }

  async save(createBookInput: CreateBookInput): Promise<Book> {
    const id = new Date().getTime() + '';
    let newBook: Book = {
      id,
      title: createBookInput.title,
      price: createBookInput.price,
      description: createBookInput.description,
      authorId: createBookInput.authorId,
    };
    this.books.push(newBook);
    return newBook;
  }

  update(id: string, updateBookInput: UpdateBookInput) {
    const book = this.findOne(updateBookInput.id);
    if (book) {
      book.title = updateBookInput.title;
      book.price = updateBookInput.price;
      book.description = updateBookInput.description;
    }
    return book;
  }

  remove(id: string) {
    this.books = this.books.filter((book) => book.id !== id);
  }
}
