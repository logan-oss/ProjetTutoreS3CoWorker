const{gql} = require ('@apollo/client')

 const LOAD_USERS= gql`
query{
    Pro{
      id
      lName
      fName
  
    }
  }

`
module.exports=LOAD_USERS; 