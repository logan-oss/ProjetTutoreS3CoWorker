const {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} = require('@apollo/client');
const {onError} = require('@apollo/client/link/error');
//const {fetch} = require('node-fetch');

const errorLink=onError(({graphqlErrors, networkError})=>{
  if(graphqlErrors) {
    graphqlErrors.map(({message,location, path})=> {
      alert(`Graphql erro ${message}`);
    });
  }
});

const link = from([
   errorLink,
   new HttpLink({uri: "http://localhost:4000/graphql"})
     
]) 
 const client = new ApolloClient({
   cache:new InMemoryCache(),
   link:link,
 })


function App() {
    return <ApolloProvider client={client}><GetPro/> </ApolloProvider>;
}

    module.exports = App;