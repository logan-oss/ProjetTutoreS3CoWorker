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
var root = {
    Coworkingg: CoWorkings,
    Professionnel: Professionnel
  
   
};

var CoWorkings = function(args) { 
    var name = args.name;
    return CoWorkingdata.filter(CoWorkings =>{  return CoWorkingdata.name == name;})[0];
}
var Professionnel = function(args) { 
    var mail = args.mail;
    return CoWorkingdata.filter(CoWorkings =>{  return Pro.mail == mail;})[0];
}

const resolvers = {
    Query: {
        Pro: () => Pro,
        Lessor: () => Lessor,       
  }

}
module.exports = resolvers;
