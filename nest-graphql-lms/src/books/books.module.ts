import { Module } from '@nestjs/common';
import { AuthorsModule } from 'src/authors/authors.module';
import { BooksResolver } from './books.resolver';
import { BooksService } from './books.service';

@Module({
  imports: [AuthorsModule],
  providers: [BooksResolver, BooksService]
})
export class BooksModule {}
