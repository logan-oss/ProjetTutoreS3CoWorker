import Sequelize from 'sequelize';
import _ from 'lodash';
import Faker from 'faker';


const Conn = new Sequelize(
  'porayko2u_CoWorking',
  'porayko2u_appli',
  'Nojogu-2',
  {
    dialect: 'mysql',
    host: 'devbdd.iutmetz.univ-lorraine.fr'
  }
);

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
    adress: {
    type: Sequelize.STRING(150),
      allowNull: false
    },
    phone: {
      type: Sequelize.INTEGER(10),
      allowNull: false
    },
    email: {
      type: Sequelize.STRING(60),
      validate: {
        isEmail: true
      }
    }
  });

  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });