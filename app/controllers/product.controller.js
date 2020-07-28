const db = require("../models"); //引入
const Product = db.product;
const Op = db.Sequelize.Op;
const productController = {
/**
 * @api {post} /products 新增一筆產品
 * @apiName 新增產品
 * @apiGroup Products
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
    create(req, res){
      // Validate request
      if (!req.body.product_id) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }      
      // Save Tutorial in the database
      Product.create(req.body)
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
      const title = req.query.product_id;
      var condition = title ? { product_id: { [Op.like]: `%${title}%` } } : null;

      Product.findAll({ where: condition })
        .then(data => {
          res.send(data);
        }); 
    },

    findType(req, res) {
      const { type } = req.params;
      Product.findAll({ where: { product_category_id: type} })
        .then(data => {
          res.send(data);
        }); 
    },
  
    // Find a single Tutorial with an id
  findOne(req, res){
    const id = req.params.id;
  
    Product.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  },
    
  update(req, res){
    const id = req.params.id;

    Product.update(req.body, {
      where: { product_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "產品更新成功"
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
  
    Product.destroy({
      where: { product_id: id }
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






module.exports = productController;