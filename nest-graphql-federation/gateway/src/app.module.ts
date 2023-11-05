import { IntrospectAndCompose } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      server: {},
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [ 
            { name: "authors", url: "http://localhost:3001/graphql" },
            { name: "books", url: "http://localhost:3002/graphql" },
          ],
        }),
      },
    }),
  ],
  providers: [],
})
export class AppModule {}
