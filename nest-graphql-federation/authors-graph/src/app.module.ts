import { Module } from '@nestjs/common';
import { AuthorsModule } from './authors/authors.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
        path: join(process.cwd(), 'src/authors-schema.gql'),
      },
    }),
    AuthorsModule
  ],
})
export class AppModule {}
