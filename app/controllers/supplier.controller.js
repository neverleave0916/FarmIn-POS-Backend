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
<<<<<<< Updated upstream
          res.send(data);
        })
        .catch(err => {
=======
          console.log(data)
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
          message: "Error getOne with id=" + id
          });
        });
    },

    //取得供應商MaxId(含產品)
    getMaxID(req, res) {
        Supplier.max('supplier_id',{
          paranoid: false
        })
        .then(data => {
          res.send(data);})
        .catch(err => {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    }
    
=======
      },

    //刪除單一筆紀錄(含產品)
    delete(req, res){
        const id = req.params.id;
        Supplier.findByPk(id,{
        include: [db.product]
        })
        .then(data => {
          data.setProducts([],)
          .then(pd=>{
            data.destroy()
            .then(num=>{
            if(num){
                res.send({
                message: "刪除成功"
                });
            }else{
                res.status(500).send({
                message: `Cannot delete Supplier with id=${id}. Maybe Supplier was not found!`
                });
            };
            });
        })
        .catch(err => {
            res.status(500).send({
            message: `Cannot delete Supplier with id=${id}. Maybe Supplier was not found!`
            });
        });

        
        })
        .catch(err => {
        res.status(500).send({
            message: `Cannot delete Supplier with id=${id}. Maybe Supplier was not found!`
        });
        });
    },

>>>>>>> Stashed changes
  };

module.exports = supplierController;