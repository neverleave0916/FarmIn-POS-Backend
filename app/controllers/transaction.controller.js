const db = require("../models"); //引入
const Op = db.Sequelize.Op;

const Transaction = db.transaction;
// const TransactionProduct = db.transaction_participate_product
// const member = db.member
// const TransactionSrc = db.transaction_src
// const TransactionStatus = db.transaction_status
// const TransactionPaymentType = db.payment_type

const transactionController = {

  //新增交易紀錄
  create(req, res){
    if (!req.body.transaction_id) {    
    res.status(400).send({
      message: "transaction_id can not be empty!"
    });
    return;
    }
    Transaction.create(req.body)
    .then(data=>{
      for(let key in req.body.products){
          let unit = req.body.products[key].unit             //transaction_participate_product_unit
          let amount = req.body.products[key].amount         //transaction_participate_product_amount
          let unit_price = req.body.products[key].unit_price //transaction_participate_product_unit_price
          let pd = req.body.products[key].product_id
          data.addProducts([pd],{ through:{
              transaction_participate_product_unit:unit,
              transaction_participate_product_amount:amount,
              transaction_participate_product_unit_price:unit_price
          }});
      }
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
      message:
          err.message || "Some error occurred while creating the Transaction."
      });
    });
  },

  //取得所有交易紀錄(含產品)
  getAll(req, res) {
    Transaction.findAll({
      include: [{
        all: true
      }]
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error getAll"
      });
    });

  },

  //取得單筆交易紀錄(含產品)，/TX2020082000002
  getOne(req, res){
    const id = req.params.id;
    
    Transaction.findByPk(id,{
      include: [{
        all: true
      }]
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error getOne with id=" + id
      });
    });
  },

  //取得最後一筆交易紀錄ID
  getMaxID(req, res) {
    Transaction.max('transaction_id',{
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

// //更新採收紀錄(含產品)
  update(req, res){
    const id = req.params.id;

    Transaction.findByPk(id,{
      include: [db.product]
    })
    .then(data => {
      data.update(req.body, {
        where: { transaction_id: req.body.transaction_id }
      });

      data.setProducts([],{
        force: true
      })
      .then(num=>{
        //let tmp=0        
        for(let key in req.body.products){
          let unit = req.body.products[key].unit             //transaction_participate_product_unit
          let amount = req.body.products[key].amount         //transaction_participate_product_amount
          let unit_price = req.body.products[key].unit_price //transaction_participate_product_unit_price
          let pd = req.body.products[key].product_id
          data.addProducts([pd],{ through:{
              transaction_participate_product_unit:unit,
              transaction_participate_product_amount:amount,
              transaction_participate_product_unit_price:unit_price
          }})
          //.then(del=>{tmp=del});
        }
        //res.send(tmp)
        //if(num>=1 || tmp>=1){
          //res.send(num)
          res.send({
            message: "交易紀錄更新成功"
          });
        // }else{
        //   res.status(500).send({
        //     message: `Cannot update 交易紀錄` + tmp
        //   });
        // }
          
      })
      .catch(err => {
        res.status(500).send({
          message: "Error getOne with id=" + id
        });
      });

    })
    .catch(err => {
      res.status(500).send({
        message: "Error getOne with id=" + id
      });
    });
  },

  //刪除單一筆紀錄(含產品)
  delete(req, res){
    const id = req.params.id;
    Transaction.findByPk(id,{
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
              message: `Cannot delete 交易紀錄 with id=${id}. Maybe 交易紀錄 was not found!`
            });
          };
        });
      })
      .catch(err => {
        res.status(500).send({
          message: `Cannot delete 交易紀錄 with id=${id}. Maybe 交易紀錄 was not found!`
        });
      });

      
    })
    .catch(err => {
      res.status(500).send({
        message: `Cannot delete 交易紀錄 with id=${id}. Maybe 交易紀錄 was not found!`
      });
    });
  },

}
module.exports = transactionController;