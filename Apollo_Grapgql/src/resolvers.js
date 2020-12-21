
let Pro =[
  {
    id: 2,
      firstName: "Porayko",
      lastName: "Geoffrey",
      mail:  "logan@gmail.com",
      phone: "06051258",
      pass: "logandu57",
    companyName: "google",
  }
];

let Lessor =[
  {
    id: 3,
      firstName: "Boukada",
      lastName: "Adel",
      mail:  "logan@gmail.com",
      phone: "06051258",
      pass: "logandu57",
    companyLocation: "Facebook",
  }
];

let CoWorking = [
  {
    id: 1,
    name: "Hamid",
    address: "5 rue des tilleuls 93007",
    owner:  "Loueur1",
  },
];

  const resolvers = {
      Query: {
          Pro: () => Pro,
          Lessor:() => Lessor,
          CoWorkings: () => CoWorking
      }
  }

  module.exports = resolvers;
