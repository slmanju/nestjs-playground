import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';
import { AuthorResolver } from './author.resolver';

@Module({
  providers: [BooksResolver, BooksService, AuthorResolver],
})
export class BooksModule {}
