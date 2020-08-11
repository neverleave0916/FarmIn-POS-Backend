const db = require("../models"); //引入
const User = db.user;
const Op = db.Sequelize.Op;
const userController = {

  create(req, res){

    if (!req.body.user_id) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    User.create(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  },

  findAll(req, res) {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
      
    User.findAll({ where: condition })
      .then(data => {
        res.send(data);
      }); 
  },

  findOne(req, res){
    const id = req.params.id;
      
    User.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  },

  getBigID(req, res) {
    User.findAll({order:[['user_id', 'DESC']],limit:1})
      .then(data => {
        if(data){
          res.send(data);
          console.log('hohohohoohohohohohohohohohohohohoho')
        }
        else{
          res.send('PU00000000000001');
        }
      }); 
  },
}

module.exports = userController;