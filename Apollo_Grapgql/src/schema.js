const express = require('express');
const {ApolloServer, gql} = require('apollo-server-express');

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

    type CoWorking {
        id: ID!
        name: String!
        address: String!
        owner: String!
    }
<<<<<<< HEAD
   
=======
>>>>>>> ec1ef5a03fa26e7d15535d446be89c2ecfc6991b
    type Query{
        Pro: [Pro],
        Lessor: [Lessor],
        coworking(name: String!): CoWorking
        getPro(mail: String!, pass: String!): Pro
        getLessor(mail: String!, pass: String!): Lessor
    }
    type Mutation{
        CreateProAccount(id:ID!, mail:String!, pass: String!,firstName: String!, lastName: String!,compagnyName:String!): Pro
    }
`;

module.exports = typeDefs;

