const db = require("../models"); //引入
const Deposit = db.deposit;
const Op = db.Sequelize.Op;
const depositController = {
/**
 * @api {post} /deposits 新增一筆會員
 * @apiName 新增會員
 * @apiGroup Deposits
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
    create(req, res){
      // Validate request
      if (!req.body.deposit_id) {
        res.status(400).send({
          message: "缺少ID"
        });
        return;
      }
    
      // Save Tutorial in the database
      Deposit.create(req.body)
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
      // const pid = req.query.deposit_id

      var condition
      // if(pid == 'max'){
      //   Deposit.findOne({ order:[['deposit_id', 'DESC']], limit:1})
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
        // if(category != null){
        //   condition = category ? { deposit_category_id: { [Op.like]: `%${category}%` } } : null;
        // }
        // else{
        //   condition = null
        // }
        Deposit.findAll({ where: condition })
          .then(data => {
            res.send(data);
          }); 
      //}
    },
  


    getMaxID(req, res) {
      Deposit.max('deposit_id', {
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
  
    Deposit.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving 會員 with id=" + id
        });
      });
  },
    
  update(req, res){
    const id = req.params.id;
    Deposit.update(req.body, {
      where: { deposit_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "會員更新成功"
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
  
    Deposit.destroy({
      where: { deposit_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "會員 was deleted successfully!"
          });
        } else {
          res.status(500).send({
            message: `Cannot delete 會員 with id=${id}. Maybe 會員 was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete 會員 with id=" + id
        });
      });
  },

  };

module.exports = depositController;