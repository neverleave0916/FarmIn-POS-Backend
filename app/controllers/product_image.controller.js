const db = require("../models"); //引入
const Product_image = db.product_image;
const Op = db.Sequelize.Op;
const product_imageController = {
/**
 * @api {post} /product_images 新增一筆產品圖片
 * @apiName 新增產品圖片
 * @apiGroup Product_images
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
    create(req, res){
      // Validate request
      if (!req.body.product_image_id) {
        res.status(400).send({
          message: "缺少ID"
        });
        return;
      }
    
      // Save Tutorial in the database
      Product_image.create(req.body)
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
  
  
    getAll(req, res) {
      const pid = req.query.product_image_id
      var condition
      // if(pid == 'max'){
      //   Product_image.findOne({ order:[['product_image_id', 'DESC']], limit:1})
      //   .then(data => {
      //     res.send(data);
      //   })
      //   .catch(err => {
      //     res.status(500).send({
      //       message: "Error getMaxID with id=" + id
      //     });
      //   });
      // }
      // else{
        Product_image.findAll({ where: condition })
          .then(data => {
            res.send(data);
          }); 
      //}
    },
  


    getMaxID(req, res) {
      Product_image.max('product_image_id',{
        paranoid: false
      })
      .then(data => {
        res.send(data);})
      .catch(err => {
        res.status(500).send({
          message: "Error getMaxID"
        });
      });
    },


    // Find a single Tutorial with an id
  getOne(req, res){
    const id = req.params.id;
  
    Product_image.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving 產品圖片 with id=" + id
        });
      });
  },
    
  update(req, res){
    const id = req.params.id;
    Product_image.update(req.body, {
      where: { product_image_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "產品圖片更新成功"
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        console.log(err)
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
  },

  delete(req, res){
    const id = req.params.id;
  
    Product_image.destroy({
      where: { product_image_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "產品圖片 was deleted successfully!"
          });
        } else {
          res.status(500).send({
            message: `Cannot delete 產品圖片 with id=${id}. Maybe 產品圖片 was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete 產品圖片 with id=" + id
        });
      });
  },

  };

module.exports = product_imageController;