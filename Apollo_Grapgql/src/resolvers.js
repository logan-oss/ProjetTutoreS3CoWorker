
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

  const resolvers = {
      Query: {
          Pro: () => Pro,
          Lessor:() =>Lessor
      }
  }

  module.exports = resolvers;