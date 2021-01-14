const {ApolloClient,gql,NormalizedCacheObject} = require('@apollo/client');
const { cache } = require('./cache');
const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    cartItems: [ID!]!
  }
`;

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  uri: 'http://localhost:4000/graphql'
});
