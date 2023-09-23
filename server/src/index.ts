import { ApolloServer } from 'apollo-server';

import { schema } from './schema';

const server = new ApolloServer({
  schema,
  introspection: process.env.NODE_ENV !== 'production',
});

server
  .listen()
  .then(({ url }) =>
    console.log(
      process.env.NODE_ENV !== 'production'
        ? `Server is running on ${url}`
        : 'Server is ready!'
    )
  );
