const { Sequelize } = require('sequelize');
const Conn = new Sequelize('mysql://porayko2u_appli:Nojogu-2@devbdd.iutmetz.univ-lorraine.fr:3306/porayko2u_CoWorking');

const User = Conn.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fName: {
      type: Sequelize.STRING(30),
      allowNull: false
    },
    lName: {
      type: Sequelize.STRING(30),
      allowNull: false
    },
    mail: {
      type: Sequelize.STRING(60),
    },
    phone: {
      type: Sequelize.STRING(10),
      allowNull: false
    },
    pass: {
      type: Sequelize.STRING(15),
    }
  },{
    timestamps: false,
    tableName: 'User',
  });

  Conn
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

 module.exports = {
    Queries: {
      GetAllUser: () => Conn.query('SELECT * FROM User').then(function success(result){
        return result[0];
      }, function error(err) {
        console.log(err);
      })
      ,
      AddUser (fName, lName, mail, phone, pass) {
        (async () => {
          await Conn.sync();
          var Cli = User.build({fName: fName, lName: lName, phone: phone, mail: mail, pass: pass });
          await Cli.save();
        })();
        return 0}
    }
  };

  /*Conn.query('SELECT * FROM User').then(function success(result){
    console.log("User:", JSON.stringify(result, null, 2));
    const Client = 
    module.exports = {Client};
  }, function error(err) {
    console.log(err);
  })*/