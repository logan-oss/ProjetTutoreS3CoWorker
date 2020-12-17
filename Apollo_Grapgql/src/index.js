const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
type Query{
  #user(mail:String, pass:String):User
  hello: String
  user: String
}


interface User {
  id: ID!
  firstName: String!
  lastName: String!
  #gender(gender: Gender): String!
  mail: String!
  phone: String
  pass: String!
}


type Pro implements User {
  companyName: String!
}



`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    user: () => [],
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);



/*
var UserData = [
    {
          id: 1,
          lastName: "Logan",
          firstname: "Porayko",
          gender: "Mr",
          mail:  "logan@gmail.com",
          pass: "logandu57"
              },
              {
          id: 2,
          lastName: "Adel",
          firstname: "Boukada",
          gender: "Mr",
          mail: "adel@gmail.com",
          pass: "AdelLeBg"
              },
          {
          id:3,
          lastName: "Geoffrey",
          firstname: "Porayko",
          gender: "Mr",
          mail: "geoffrey@gmail.com"
          }]

*/
/*
var getService = function(args) {
    var id = args.id;
    return ServiceData.filter(Service => {
        return Service.name == name
          && Service.description == description
          && Service.duree == duree
          && Service.description == description;
    })[0];
}

var getCoWorking = function(args) {
    var id = args.id_salle;
    return CoWorkingData.filter(CoWorking => {
        return CoWorking.name == name
          && CoWorking.address == address
          && CoWorking.owner == owner;
    })[0];
}

var getServiceOf = function(args) {
    var profesional = args.profesional;
    return ServiceOfData.filter(ServiceOf => {
        return ServiceOf.profesional
          && CoWorking.service = service;
    })[0];
}

var getPost = function(args) {
    var id = args.Id_Post;
    return PostData.filter(Post => {
        return Post.officeType;

    })[0];
  }

  var ServiceData = [
      {
            id: 1,
            name: "stage mecanique",
            description: "le stage est cool",
            duree: 1

              },
              {
            id:2,
            name: "stage mecanique 2",
            description: "le stage est cool",
            duree: 1
              },
          {
            id:3,
            name: "stage mecanique 3",
            description: "le stage est cool",
            duree: 1
          }]

  var getUser = function(args) {
      var id = args.id;
      return UserData.filter(User => {
          return User.mail == mail
            && User.pass == pass;
      })[0];
  }
*/
