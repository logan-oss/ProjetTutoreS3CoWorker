const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');


const typeDefs = gql`
interface User {
  id: ID
  firstName: String
  lastName: String
  mail: String
  phone: String
  pass: String
}



type Pro implements User {
  id: ID
  firstName: String
  lastName: String
  mail: String
  phone: String
  pass: String
  companyName : String!
}

type Lessor implements User {
  id: ID
  firstName: String
  lastName: String
  mail: String
  phone: String
  pass: String
  companyLocation : String!
}

type Query{
  Pro: [Pro],
  Lessor:[Lessor],
}

`;
module.exports = typeDefs;