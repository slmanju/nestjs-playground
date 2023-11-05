import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { Author } from './books/author.entity';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
        path: join(process.cwd(), 'src/books-schema.gql'),
      },
      buildSchemaOptions: {
        orphanedTypes: [Author],
      },
    }),
    BooksModule
  ],
})
export class AppModule {}
