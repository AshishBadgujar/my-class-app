import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello, GraphQL!'
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})


server.listen().then(({ url }) => {
    console.log(`server ready at ${url}`)
})