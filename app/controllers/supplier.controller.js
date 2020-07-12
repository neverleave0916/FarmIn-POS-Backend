const db = require("../models"); //引入
const Supplier = db.supplier;
const Op = db.Sequelize.Op;
const supplierController = {

    create(req, res){
      // Validate request
      if (!req.body.supplier_id) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
      // Create a Tutorial
      const supplier = {
        "supplier_id": req.body.supplier_id,
        "supplier_name": req.body.supplier_name,
        "supplier_phone": req.body.supplier_phone,
        "supplier_address": req.body.supplier_address,
        "supplier_disc": req.body.supplier_description,
      };
    
      // Save Tutorial in the database
      Supplier.create(supplier)
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
    
      Supplier.findAll({ where: condition })
        .then(data => {
          res.send(data);
        }); 
    },
  
    // Find a single Tutorial with an id
    findOne(req, res){
      const id = req.params.id;
    
      Supplier.findByPk(id)
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

module.exports = supplierController;