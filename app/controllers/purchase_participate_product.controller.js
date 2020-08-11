const db = require("../models"); //引入
const Purchase_participate_product = db.purchase_participate_product;
const Op = db.Sequelize.Op;
const purchase_participate_productController = {

  create(req, res){

    if (!req.body.purchase_participate_product_id) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    Purchase_participate_product.create(req.body)
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
      
    Purchase_participate_product.findAll({ where: condition })
      .then(data => {
        res.send(data);
      }); 
  },

  findOne(req, res){
    const id = req.params.id;
      
    Purchase_participate_product.findByPk(id)
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

module.exports = purchase_participate_productController;