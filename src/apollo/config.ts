import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  connectToDevTools: true,
  uri: 'http://localhost/api/graphql',
});

export { client };
