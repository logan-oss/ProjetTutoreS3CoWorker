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

let CoWorking = [
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

const resolvers = {
    Query: {
        Pro: () => Pro,
        Lessor: () => Lessor,
        CoWorkings: () => CoWorking,
        CoWorking: (id) => {
            CoWorking.forEach(element => {
                // Todo: should return something, to debug.
                // {CoWorking(id: 2) {id}}
                if (element.id == id) {
                    return element;
                }
            });

            return null;
        }

    }
}

module.exports = resolvers;
