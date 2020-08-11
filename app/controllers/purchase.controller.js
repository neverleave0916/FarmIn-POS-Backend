const db = require("../models"); //引入
const Purchase = db.purchase;
const Op = db.Sequelize.Op;
const purchaseController = {

  create(req, res){

    if (!req.body.purchase_id) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    Purchase.create(req.body)
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
      
    Purchase.findAll({ where: condition })
      .then(data => {
        res.send(data);
      });
  },

  findOne(req, res){
    const id = req.params.id;

    Purchase.findByPk(id)
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
    Purchase.findOne({ order:[['purchase_id', 'DESC']], limit:1})
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
    Purchase.destroy({
      where: {}
    })
  }
}

module.exports = purchaseController;