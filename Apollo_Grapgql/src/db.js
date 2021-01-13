const { Sequelize } = require('sequelize');
const Conn = new Sequelize('mysql://porayko2u_appli:Nojogu-2@devbdd.iutmetz.univ-lorraine.fr:3306/porayko2u_CoWorking');

const User = Conn.define('User', {
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
    mail: {
      type: Sequelize.STRING(60),
    }
  },{
    timestamps: false,
    tableName: 'User'
  });

  Conn
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  (async () => {
    await Conn.sync();
    const users = await User.findAll();
    console.log("User:", JSON.stringify(users, null, 2));
   /* const jane = User.build({ fName: "Mangoov",lName: "Jane",adress: "test",phone: 0658478096, mail: "Jane@gmail.com"  });
    await jane.save();
    console.log('Jane was saved to the database!');*/
  })();


  /*Conn.query('SELECT * FROM User').then(function success(result){
    console.log(result);
  }, function error(err) {
    console.log(err);
  })*/