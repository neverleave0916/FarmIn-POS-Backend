const db = require("../models"); //引入
const Adjust = db.adjust;
const Op = db.Sequelize.Op;
const adjustController = {

  create(req, res){

    if (!req.body.adjust_id) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    console.log(req.body)

    Adjust.create(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.log(err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  },

  findAll(req, res) {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
      
    Adjust.findAll({ where: condition })
      .then(data => {
        res.send(data);
      });
  },

  findOne(req, res){
    const id = req.params.id;

    Adjust.findByPk(id)
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
    Adjust.findOne({ order:[['adjust_id', 'DESC']], limit:1})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  },

  deleteAll(req, res) {
    Adjust.destroy({
      where: {}
    })
  }
}

module.exports = adjustController;