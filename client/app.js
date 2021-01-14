<<<<<<< HEAD
const {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} = require("@apollo/client");
const { onError } = require("@apollo/client/link/error");
const GetPro = require("./Compenents/getPro");
const {fetch} = require('cross-fetch');
//const Form = require("./Components/Form");

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:4000/graphql",fetch }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
   <ApolloProvider client={client}> {" "} { <GetPro /> } <Form /></ApolloProvider>
  );
}

module.exports = App;
=======
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
>>>>>>> 134644fc212ad7be5a7526927e1c73d12cf6ff2c
