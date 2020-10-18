const db = require("../models"); //引入
const Plant = db.plant;
const Op = db.Sequelize.Op;
const plantController = {

  //新增進貨
  create(req, res){
  if (!req.body.plant_id) {    
    res.status(400).send({
      message: "plant_id can not be empty!"
    });
    return;
  }

  Plant.create(req.body)
    .then(data=>{
      for(let key in req.body.product){
        let pi = req.body.product[key].product_id
        let amount = req.body.product[key].amount
        data.addProducts([pi],{ through:{
            plant_participate_product_amount:amount,
        }});
      }
      console.log(data)
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
      message:
        err.message || "Some error occurred while creating the supplier."
      });
    });
  },

  //取得所有進貨產品(含)
  getAll(req, res) {
    Plant.findAll({
      include: [{
          all: true
      }]
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.log(err)
        res.status(500).send({
          message: "Error getAll"
        });
      });
  },

  //取得單筆進貨產品(含)
  getOne(req, res){
    const id = req.params.id;
    
    Plant.findByPk(id,{
      //include: [{model:Harvest_product}],
      include: [db.product]
      // include: [{
      //   all: true
      // }]
      })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.log(err)
        res.status(500).send({
        message: "Error getOne with id=" + id
        });
      });
  },

  //取得進貨產品MaxId(含)
  getMaxID(req, res) {
    Plant.max('plant_id',{
      paranoid: false
      })
      .then(data => {
        if(data) {
          res.send(data);
        }else{
          data = null
          res.send(data);
        }})
      .catch(err => {
        res.status(500).send({
          message: "Error getMaxID"
        });
      });
  },

  //更新進貨產品(含)
  update(req, res){
    const id = req.params.id;
    console.log(req.body)
    Plant.findByPk(id,{
      include: [db.product]
    })
    .then(data => {
      data.update(req.body, {
        where: { plant_id: req.body.plant_id }
      });

      data.setProducts([],{
        force: true
      })
        .then(num=>{
          //let tmp=0    
          for(let key in req.body.product){
            let pi = req.body.product[key].product_id
            let amount = req.body.product[key].amount
            data.addProducts([pi],{ through:{
                plant_participate_product_amount:amount,
            }});
          }
            res.send({
              message: "進貨產品更新成功"
            });
        })
        .catch(err => {
          console.log(err)
          res.status(500).send({
            message: "Error getOne with id=" + id
          });
        });
    })
    .catch(err => {
      console.log(err)
      res.status(500).send({
        message: "Error getOne with id=" + id
      });
    });
  },

  //刪除單一筆紀錄(含)
  delete(req, res){
    const id = req.params.id;
    Plant.findByPk(id,{
      include: [db.product]
    })
    .then(data => {
      data.setProducts([],)
      .then(pi=>{
        data.destroy()
        .then(num=>{
          if(num) {
            res.send({
            message: "刪除成功"
            });
          }
          else {
            res.status(500).send({
            message: `Cannot delete Plant with id=${id}. Maybe Plant was not found!`
            });
          };
        });
      })
      .catch(err => {
        res.status(500).send({
          message: `Cannot delete Plant with id=${id}. Maybe Plant was not found!`
        });
      });
    })
    .catch(err => {
      res.status(500).send({
          message: `Cannot delete Plant with id=${id}. Maybe Plant was not found!`
      });
    });
  },

};

module.exports = plantController;