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