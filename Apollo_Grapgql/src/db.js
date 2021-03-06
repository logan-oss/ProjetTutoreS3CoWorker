const { Sequelize } = require('sequelize');
const Conn = new Sequelize('mysql://porayko2u_appli:Nojogu-2@devbdd.iutmetz.univ-lorraine.fr:3306/porayko2u_CoWorking');

//-----Db definition -------//
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
      allowNull: false
    },
    phone: {
      type: Sequelize.STRING(10),
      allowNull: false
    },
    pass: {
      type: Sequelize.STRING(15),
      allowNull: false
    }
  },{
    timestamps: false,
    tableName: 'User',
  });

  const Pro = Conn.define('pro', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firmName: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    idUser: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },{
    timestamps: false,
    tableName: 'Pro',
  });

  const Lessor = Conn.define('lessor', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idUser: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },{
    timestamps: false,
    tableName: 'Lessor',
  });

  const Service = Conn.define('service', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.DOUBLE(4,2),
      allowNull: false
    },
    time: {
      type: Sequelize.STRING(5),
      allowNull: false
    },
    idPro: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    idType: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },{
    timestamps: false,
    tableName: 'Service',
  });

  const CoWorkingSpace = Conn.define('coworkingspace', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    address: {
      type: Sequelize.STRING(60),
      allowNull: false
    },
    idLessor: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },{
    timestamps: false,
    tableName: 'CoWorkingSpace',
  });

  const WorkSpace = Conn.define('workspace', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idCWS: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    idType: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },{
    timestamps: false,
    tableName: 'WorkSpace',
  });

  const WorkSpaceType = Conn.define('workspacetype', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
      type: Sequelize.STRING(60),
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },{
    timestamps: false,
    tableName: 'WorkSpaceType',
  });

  const Booking = Conn.define('booking', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Date: {
      type: Sequelize.STRING(60),
      allowNull: false
    },
    idUser: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    idService: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    idWS: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },{
    timestamps: false,
    tableName: 'Booking',
  });
//------------------------------//

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
        return 0
      }
      ,
      GetAllService: () => Conn.query('SELECT s.id, s.description, s.price, s.time,CONCAT(u.fName," ",u.lName),s.idType FROM Service s, Pro p, User u WHERE s.idPro=p.id AND p.idUser=u.id').then(function success(result){
        return result[0];
      }, function error(err) {
        console.log(err);
      })
      ,
      GetAllType: () => Conn.query('SELECT * FROM `WorkSpaceType`').then(function success(result){
        return result[0];
      }, function error(err) {
        console.log(err);
      })
      ,
      GetAllServicePro (id) {
        Conn.query('SELECT * FROM Service s, Pro p WHERE p.id=s.idPro AND s.idPro=',id).then(function success(result){
          return result[0];
        }, function error(err) {
          console.log(err);
        })
        return 0
      },
      GetPro (fName,lName) {
        Conn.query('SELECT p.id FROM Pro p, User u WHERE u.fName=',fName,'AND u.lName=',lName,'AND u.id=p.idUser').then(function success(result){
          return result[0];
        }, function error(err) {
          console.log(err);
        })
        return 0
      },
      GetAllCWS: () => Conn.query('SELECT * FROM `CoWorkingSpace`').then(function success(result){
        return result[0];
      }, function error(err) {
        console.log(err);
      })
      ,
      AddService (description, price, time, proName, idType){
        const pro = proName.split('');
          (async () => {
            await Conn.sync();
            var service = Service.build({description: description, price: price, time: time, idPro: this.GetPro(pro[0],pro[1]), idType: idType});
            await service.save();
          })();
      }
    }
  };

  /*Conn.query('SELECT * FROM User').then(function success(result){
    console.log("User:", JSON.stringify(result, null, 2));
    const Client = 
    module.exports = {Client};
  }, function error(err) {
    console.log(err);
  })*/


  /*
  AddLessor(args)
  AddCWS(args)
  AddBooking(args)
  AddWS(args)
  GetPlanningPro(args)
  GetPlanningClient(args)
  GetAllServicePro(args)
  GetAllCWSLessor(args)
  */