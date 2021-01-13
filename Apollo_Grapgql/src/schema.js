const express = require('express');
const {ApolloServer, gql} = require('apollo-server-express');

const typeDefs = gql`
    interface User {
        id: ID
        fName: String
        lName: String
        mail: String
        phone: String
        pass: String
    }

    type Client implements User { 
        id: ID
        fName: String
        lName: String
        mail: String
        phone: String
        pass: String
    }

    type Pro implements User {
        id: ID
        fName: String
        lName: String
        mail: String
        phone: String
        pass: String
        companyName : String!
    }
    type Lessor implements User {
        id: ID
        fName: String
        lName: String
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
   
    type Query{
        Pro: [Pro],
        Lessor: [Lessor],
        GetAll: [Client],
        coworking(name: String!): CoWorking
        getPro(mail: String!, pass: String!): Pro
        getLessor(mail: String!, pass: String!): Lessor
        AddUs(fName: String!, lName: String!, mail: String!, phone: String!, pass: String!): Int
    }
    type Mutation{
        CreateProAccount(id:ID!, mail:String!, pass: String!,firstName: String!, lastName: String!,compagnyName:String!): Pro
    }
`;

module.exports = typeDefs;

