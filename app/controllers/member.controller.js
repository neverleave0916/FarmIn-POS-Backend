const db = require("../models"); //引入
const Member = db.member;
const Op = db.Sequelize.Op;
const memberController = {

  create(req, res){
    console.log('111')
    if (!req.body.member_id) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    const member = {
      "member_id": req.body.member_id,
      "member_card_id": req.body.member_card_id,
      "member_name": req.body.member_name,
      "member_gender": req.body.member_gender,
      "member_birthday": req.body.member_birthday,
      "member_phone": req.body.member_phone,
      "member_email": req.body.member_email,
      "member_address": req.body.member_address,
      "member_balance": req.body.member_balance,
      "member_remark": req.body.member_remark
    };

    Member.create(member)
      .then(data => {
        res.send(data);
        console.log('222')
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
      
    Member.findAll({ where: condition })
      .then(data => {
        res.send(data);
      }); 
  },

  findOne(req, res){
    const id = req.params.id;
      
    Member.findByPk(id)
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

    Member.update(req.body, {
      where: { member_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "會員資料更新成功"
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
  
    Member.destroy({
      where: { member_id: id }
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
}

module.exports = memberController;