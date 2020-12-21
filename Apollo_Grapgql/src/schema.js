const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');


const typeDefs = gql`
type User {
  id: ID
  firstName: String
  lastName: String
  mail: String
  phone: String
  pass: String
}

type Query{
  users: [User]
}

`;
module.exports = typeDefs;