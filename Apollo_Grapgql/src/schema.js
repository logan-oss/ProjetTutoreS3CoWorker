const express = require('express');
const {ApolloServer, gql} = require('apollo-server-express');

const typeDefs = gql`
    interface User {
        id: ID
        fName: String!
        lName: String!
        mail: String!
        phone: String!
        pass: String!
    }

    type Client implements User { 
        id: ID
        fName: String!
        lName: String!
        mail: String!
        phone: String!
        pass: String!
    }

    type Pro implements User {
        id: ID
        fName: String!
        lName: String!
        mail: String!
        phone: String!
        pass: String!
        companyName : String!
    }
    type Lessor implements User {
        id: ID
        fName: String!
        lName: String!
        mail: String!
        phone: String!
        pass: String!
        companyLocation : String!
    }

    type Service {
        id: ID
        description: String!
        price: String!
        time: String!
        proName: String!
    }

    type CoWorkingSpace {
        id: ID
        name: String!
        address: String!
        idLessor: ID!
    }

    type WorkSpace {
        id: ID
        idCWS: ID!
        idType: ID!
    }

    type WorkSpaceType {
        id: ID
        name: String!
        description: String!
    }

    type Booking {
        id: ID
        Date: String!
        idUser: ID!
        idService: ID!
        idWS: ID!
    }
   
    type Query{
        Pro: [Pro],
        Lessor: [Lessor],
        GetAll: [Client],
        GetAllService: [Service]
        coworking(name: String!): CoWorkingSpace
        getPro(mail: String!, pass: String!): Pro
        getLessor(mail: String!, pass: String!): Lessor
        AddUs(fName: String!, lName: String!, mail: String!, phone: String!, pass: String!): Int
    }
    type Mutation{
        CreateProAccount(id:ID!, mail:String!, pass: String!,firstName: String!, lastName: String!,compagnyName:String!): Pro
    }
`;

module.exports = typeDefs;

