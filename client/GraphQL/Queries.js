const{gql} = require ('@apollo/client')

 const LOAD_USERS= gql`
query{
    Pro{
      id
      lastName
      firstName
  
    }
  }

`
module.exports=LOAD_USERS; 