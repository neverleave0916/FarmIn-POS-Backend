const db = require("../models"); //引入
const Renew = db.renew;
const Op = db.Sequelize.Op;
const renewController = {

    //新增供應商
    create(req, res){
    if (!req.body.renew_id) {    
    res.status(400).send({
        message: "renew_id can not be empty!"
    });
    return;
    }
    Renew.create(req.body)
    .then(data=>{
        for(let key in req.body.products){
            let amount = req.body.products[key].amount  //renew_participate_product_amount
            let pd = req.body.products[key].product_id
            data.addProducts([pd],{ through:{
            renew_participate_product_amount:amount
            }});
        }
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the renew."
        });
    });
    },
  
    //取得所有供應商(含供應產品)
    getAll(req, res) {
      Renew.findAll({
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

    getByMember(req,res) {
      const title = req.query.member_id;
      var condition = title ? { member_id: { [Op.like]: `%${title}%` } } : null;

      Renew.findAll({
        //include: [{model:Harvest_product}],
        //include: [db.harvest_participate_product]
        include: [{
          all: true
        }],
        where: condition
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

    //取得單筆供應商(含產品)
    getOne(req, res){
        const id = req.params.id;
        
        Renew.findByPk(id,{
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
            res.status(500).send({
            message: "Error getOne with id=" + id
            });
        });
    },

    //取得供應商MaxId(含產品)
    getMaxID(req, res) {
        Renew.max('renew_id',{
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

    //更新供應商(含產品)
    update(req, res){
        const id = req.params.id;
    
        Renew.findByPk(id,{
          include: [db.product]
        })
        .then(data => {
          data.update(req.body, {
            where: { renew_id: req.body.renew_id }
          });
    
          data.setProducts([],{
            force: true
          })
          .then(num=>{
            //let tmp=0        
            for(let key in req.body.products){
              let amount = req.body.products[key].amount
              let pd = req.body.products[key].product_id
              data.addProducts([pd],{ through:{
                renew_participate_product_amount:amount
              }})
              //.then(del=>{tmp=del});
            }
            //res.send(tmp)
            //if(num>=1 || tmp>=1){
              //res.send(num)
              res.send({
                message: "供應商更新成功"
              });
            // }else{
            //   res.status(500).send({
            //     message: `Cannot update 交易紀錄` + tmp
            //   });
            // }
              
          })
          .catch(err => {
            consolr.log(err)
            res.status(500).send({
              message: "Error getOne with id=" + id
            });
          });
    
        })
        .catch(err => {
          consolr.log(err)
          res.status(500).send({
            message: "Error getOne with id=" + id
          });
        });
      },

    //刪除單一筆紀錄(含產品)
    delete(req, res){
        const id = req.params.id;
        Renew.findByPk(id,{
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
                message: `Cannot delete Renew with id=${id}. Maybe Renew was not found!`
                });
            };
            });
        })
        .catch(err => {
            res.status(500).send({
            message: `Cannot delete Renew with id=${id}. Maybe Renew was not found!`
            });
        });

        
        })
        .catch(err => {
        res.status(500).send({
            message: `Cannot delete Renew with id=${id}. Maybe Renew was not found!`
        });
        });
    },

  };

module.exports = renewController;