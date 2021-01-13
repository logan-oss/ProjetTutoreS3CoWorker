/*const S3 = require('aws-sdk/clients/s3');
const isEmail = require('isemail');
const mime = require('mime');
const uuidv4 = require('uuid/v4');*/
const {DataSource} = require('apollo-datasource');


let Pro = [
    {
        id: 2,
        fName: "Porayko",
        lName: "Geoffrey",
        mail: "logan@gmail.com",
        phone: "06051258",
        pass: "logandu57",
        companyName: "google",
    },
    {
        id: 3,
        firstName: "Porayko",
        lastName: "Logan",
        mail: "logan@gmail.com",
        phone: "06051258",
        pass: "logandsu57",
        companyName: "godsogle",
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
    },
    {
        id: 4,
        firstName: "John",
        lastName: "Doe",
        mail: "john@gmail.com",
        phone: "0605891258",
        pass: "qzdqzdzd",
        companyLocation: "Facebook",
    }
];


class UserAPI extends DataSource {
    users ({type: type} = {}) {
        switch (type) {
            case "lessor":
                return Lessor
                break
            case "pro":
                return Pro
                break

        }
    }


}

module.exports = UserAPI;
