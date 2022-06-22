import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  connectToDevTools: true,
  uri: '/api/graphql',
});

export { client };
