const db = require("../models"); //引入
const Product_category = db.product_category;
const Op = db.Sequelize.Op;
const product_categoryController = {

    create(req, res){
      // Validate request
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
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Product_category."
          });
        });
    },
  
  
    getAll(req, res) {
      //?product_category_id=
      const title = req.query.product_category_id;
      var condition = title ? { product_category_id: { [Op.like]: `%${title}%` } } : null;
    
      Product_category.findAll({ where: condition })
        .then(data => {
          res.send(data);
        }); 
    },

    getMaxID(req, res) {
      Product_category.max('product_category_id',{
        paranoid: false
      })
      .then(data => {
        console.log(data)
        res.send(data);})
      .catch(err => {
        console.log(err)
        res.status(500).send({
          message: "Error getMaxID"
        });
      });
    },
  
    //:ID
    getOne(req, res){
      const id = req.params.id;
    
      Product_category.findByPk(id)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving product_category with id=" + id
          });
        });
    },
    
    update(req, res){
      const id = req.params.id;
    
      Product_category.update(req.body, {
        where: { product_category_id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "產品類別更新成功"
            });
          } else {
            res.send({
              message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Tutorial with id=" + id
          });
        });
    },


  delete(req, res){
    const id = req.params.id;
  
    Product_category.destroy({
      where: { product_category_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  }

  };

module.exports = product_categoryController;