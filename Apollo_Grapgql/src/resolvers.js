const { Db } = require('./db');
//------------------------------Base de donnée--------------------------------------//
/*const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://porayko2u_appli:Nojogu-2@devbdd.iutmetz.univ-lorraine.fr:3306/porayko2u_CoWorking');


  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });*/
    
//--------------------------------------------------------------------------//

let Pro = [
    {
        id: 2,
        firstName: "Porayko",
        lastName: "Geoffrey",
        mail: "logan@gmail.com",
        phone: "06051258",
        pass: "logandu57",
        companyName: "google",
    }
];

let Lessor = [
    {
        id: 3,
        firstName: "Boukada",
        lastName: "Adel",
        mail: "logan@gmail.com",
        phone: "06051258",
        pass: "logandu57",
        companyLocation: "Facebook",
    }
];

let CoWorkingdata = [
    {
        id: 1,
        name: "Hamid",
        address: "5 rue des tilleuls 93007",
        owner: "Loueur1",
    },
    {
        id: 2,
        name: "Beez",
        address: "5 rue des tilleuls 57070",
        owner: "Loueur2",
    },
];


/*var coworking = function(parent,args) { 
    var name = args.name;
    return CoWorkingdata.filter(coworking =>{  return coworking.name == name;})[0];
}*/

var Professionnel = function(args) { 
    var mail = args.mail;
    return CoWorkingdata.filter(CoWorkings =>{  return Pro.mail == mail;})[0];
}


const resolvers = {
    Query: {
        Pro: () => Pro,
        Lessor: () => Lessor,  
        coworking (parent, args)  {return CoWorkingdata.filter(coworking =>{  return coworking.name == args.name;})[0];},
        getPro (parent, args) { return Pro.filter(pro =>{  return pro.mail == args.mail && pro.pass==args.pass ;})[0];},
        getLessor (parent, args) { return Lessor.filter(lessor =>{  return lessor.mail == args.mail && lessor.pass==args.pass ;})[0];},
        
}
}


module.exports = resolvers;
