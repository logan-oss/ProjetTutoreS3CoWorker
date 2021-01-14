const { ApolloClient, InMemoryCache,HttpLink } = require('@apollo/client');
const { gql } = require('@apollo/client');
const {fetch} = require('cross-fetch');


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