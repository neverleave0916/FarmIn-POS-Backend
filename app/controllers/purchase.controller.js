<<<<<<< Updated upstream
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

    const purchase = {
      "purchase_id": req.body.purchase_id,
      "user_id": req.body.user_id,
      "purchase_date": req.body.purchase_date,
      "purchase_sub": req.body.purchase_sub,
      "purchase_discount": req.body.purchase_discount,
      "purchase_total": req.body.purchase_total
    };

    Purchase.create(purchase)
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
  }
}

=======
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
  }
}

>>>>>>> Stashed changes
module.exports = purchaseController;