const { ApolloClient, InMemoryCache,HttpLink } = require('@apollo/client');
const { gql } = require('@apollo/client');
const {fetch} = require('cross-fetch');
const {React} = require('react');
const { render } = require('react-dom');
const { ApolloProvider } = ('@apollo/react-hooks');



const client = new ApolloClient({
  link:new HttpLink({uri:'http://localhost:4000/graphql',fetch}),
  cache: new InMemoryCache()
});
client.query({
    query: gql`
    query{
        GetAllService{
          id
          description
        }
      }`
  }).then(result => console.log("Service:", JSON.stringify(result, null, 2)));
  
  
  function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
      </div>
    </ApolloProvider>
  );
}

render(<App />, document.getElementById('root'));