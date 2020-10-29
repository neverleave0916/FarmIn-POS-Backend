const db = require("../models"); //引入
const Cart_status = db.cart_status;
const Op = db.Sequelize.Op;
const cart_statusController = {
/**
 * @api {post} /cart_statuss 新增一筆購物車狀態
 * @apiName 新增購物車狀態
 * @apiGroup Cart_statuss
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
    create(req, res){
      // Validate request
      if (!req.body.cart_status_id) {
        res.status(400).send({
          message: "缺少ID"
        });
        return;
      }
    
      // Save Tutorial in the database
      Cart_status.create(req.body)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          console.log(err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          });
        });
    },
  
  
    getAll(req, res) {
      var condition

      Cart_status.findAll({ where: condition })
        .then(data => {
          res.send(data);
        }); 
    },
  


    getMaxID(req, res) {
      Cart_status.max('cart_status_id', {
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
  
    Cart_status.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving 購物車狀態 with id=" + id
        });
      });
  },
    
  update(req, res){
    const id = req.params.id;
    Cart_status.update(req.body, {
      where: { cart_status_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "購物車狀態更新成功"
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
  
    Cart_status.destroy({
      where: { cart_status_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "購物車狀態 was deleted successfully!"
          });
        } else {
          res.status(500).send({
            message: `Cannot delete 購物車狀態 with id=${id}. Maybe 購物車狀態 was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete 購物車狀態 with id=" + id
        });
      });
  },

  };

module.exports = cart_statusController;