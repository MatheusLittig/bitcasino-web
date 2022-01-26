import { ApolloClient, InMemoryCache } from '@apollo/client';

const apollo = new ApolloClient({
  uri: 'https://api.blocktap.io/graphql',
  cache: new InMemoryCache(),
});

export { apollo };
