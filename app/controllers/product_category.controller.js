const db = require("../models"); //引入
const Product_category = db.product_category;
const Op = db.Sequelize.Op;
const product_categoryController = {

  create(req, res){
    console.log(req.body.product_category_id)
    if (!req.body.product_category_id) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    Product_category.create(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.log(req.body)
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
      
    Product_category.findAll({ where: condition })
      .then(data => {
        res.send(data);
      }); 
  },

  findOne(req, res){
    const id = req.params.id;
      
    Product_category.findByPk(id)
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
    Product_category.findOne({ order:[['product_category_id', 'DESC']], limit:1})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  },
}

module.exports = product_categoryController;