const db = require("../models"); //引入
const Purchaseproducts = db.purchase.products;
const Op = db.Sequelize.Op;
const purchaseproductsController = {

  create(req, res){

    if (!req.body.purchase_id) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    const purchaseproducts = {
      "purchase_id": req.body.purchase_id,
      "product_id": req.body.product_id,
      "purchase_unit": req.body.purchase_unit,
      "purchase_amount": req.body.purchase_amount,
      "purchase_unit_price": req.body.purchase_unit_price
    };

    Purchaseproducts.create(purchaseproducts)
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
      
    Purchaseproducts.findAll({ where: condition })
      .then(data => {
        res.send(data);
      }); 
  },

  findOne(req, res){
    const id = req.params.id;
      
    Purchaseproducts.findByPk(id)
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

module.exports = purchaseproductsController;