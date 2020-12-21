let users = [
    {
      id: 1,
      firstName: "Porayko",
      lastName: "Logan",
      mail:  "logan@gmail.com",
      phone: "06051258",
      pass: "logandu57",
    },
  ];

  const resolvers = {
      Query: {
          users: () => users
      }
  }

  module.exports = resolvers;