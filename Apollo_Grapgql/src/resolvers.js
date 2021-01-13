//------------------------------Base de donnée--------------------------------------//
const {Queries} = require('./db');
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

console.log(Queries);

var coworking = function(parent,args) { 
    var name = args.name;
    return CoWorkingdata.filter(coworking =>{  return coworking.name == name;})[0];
}



const resolvers = {
    Query: {
        Pro: () => query1,
        Lessor: () => Lessor,  
        coworking (parent, args)  {return CoWorkUingdata.filter(coworking =>{  return coworking.name == args.name;})[0];},
        getPro (parent, args) { return query1.filter(pro =>{  return pro.mail == args.mail && pro.pass==args.pass ;})[0];},
        getLessor (parent, args) { return Lessor.filter(lessor =>{  return lessor.mail == args.mail && lessor.pass==args.pass ;})[0];},
        GetAll: () => Queries.GetAllUser()
       
    },
    Mutation: {
        CreateProAccount(parent, {id,mail,pass, firstName, lastName,compagnyName}){ 
            let checkID = Pro.findIndex(pro=>pro.id==id)
                if(checkID==-1){
                    let newPro= {id, mail, pass, firstName, lastName, compagnyName} 
                    Pro.push(newPro)
                }else{
                    throw new Error('ID already taken')
                }
                    
                }
              /*  CreateLessorAccount(parent, {id,mail,pass, firstName, lastName,compagnyName}){ 
                    let checkID = Lessor.findIndex(lessor=>lessor.id==id)
                        if(checkID==-1){
                            let newPro= {id, mail, pass, firstName, lastName, compagnyName} 
                            Lessor.push(newPro)
                        }else{
                            throw new Error('ID already taken')
                        }},
                CreateProAccount(parent, {id,mail,pass, firstName, lastName,compagnyName}){ 
                    let checkID = Pro.findIndex(pro=>pro.id==id)
                         if(checkID==-1){
                             let newPro= {id, mail, pass, firstName, lastName, compagnyName} 
                             Pro.push(newPro)
                         }else{
                            throw new Error('ID already taken')
                             }
                                    
                                }
                            
                        },*/

            }
        }
    
  


module.exports = resolvers;
