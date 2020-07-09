/*const Model = require('../models');
const { Product } = Model;

const productController = {
  all(req, res) {
    Product.find({})
      .populate('manufacturer')
      .exec((err, products) => res.json(products))
  },
  byId(req, res) {
    const idParams = req.params.id;

    Product
      .findOne({ _id: idParams })
      .populate('manufacturer')
      .exec((err, product) => res.json(product));
  },
  create(req, res) {
    const requestBody = req.body;
    const newProduct = new Product(requestBody);

    newProduct.save((err, saved) => {
      Product
        .findOne({ _id: newProduct._id })
        .populate('manufacturer')
        .exec((err, product) => res.json(product))
    })
  },
  update(req, res) {
    const idParams = req.params.id;
    const product = req.body;

    console.log('idParams', idParams);
    console.log('product', product);

    Product.updateOne({ _id: idParams }, { ...product }, (err, updated) => {
      res.json(updated);
    })
  },
  remove(req, res) {
    const idParams = req.params.id;

    Product.findOne({ _id: idParams }).remove( (err, removed) => res.json(idParams) )
  }
}

*/


const db = require("../models"); //引入
const Product = db.product;
const Op = db.Sequelize.Op;
const productController = {

    create(req, res){
      // Validate request
      if (!req.body.產品編號) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
      // Create a Tutorial
      const product = {
        "產品編號": req.body.產品編號,
        "產品類別編號": req.body.產品類別編號,
        "發布狀態編號": req.body.發布狀態編號,
        "產品名稱": req.body.產品名稱,
        "產品庫存": req.body.產品庫存
      };
    
      // Save Tutorial in the database
      Product.create(product)
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
    
      Product.findAll({ where: condition })
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
  }
    
  };






module.exports = productController;