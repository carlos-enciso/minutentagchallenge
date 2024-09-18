import { ApolloServer } from 'apollo-server';
import { mergedGQLSchema } from './schema/index.js';
import { resolvers } from './resolver/index.js';

const server = new ApolloServer({ typeDefs: mergedGQLSchema, resolvers });

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
