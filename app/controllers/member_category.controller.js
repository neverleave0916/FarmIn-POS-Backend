const db = require("../models"); //引入
const Member_category = db.member_category;
const Op = db.Sequelize.Op;
const member_categoryController = {

  //新增供應商
  create(req, res){
  if (!req.body.member_category_id) {    
    res.status(400).send({
      message: "member_category_id can not be empty!"
    });
    return;
  }

  Member_category.create(req.body)
    .then(data=>{
      for(let key in req.body.members){
        let mb = req.body.members[key].member_id
        data.addMembers([mb]);
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

  //取得所有會員類別(含)
  getAll(req, res) {
    Member_category.findAll({
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

  //取得單筆會員類別(含)
  getOne(req, res){
    const id = req.params.id;
    
    Member_category.findByPk(id,{
      //include: [{model:Harvest_product}],
      include: [db.member]
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

  //取得會員類別MaxId(含)
  getMaxID(req, res) {
    Member_category.max('member_category_id',{
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

  //更新會員類別(含)
  update(req, res){
    const id = req.params.id;
    console.log(req.body)
    Member_category.findByPk(id,{
      include: [db.member]
    })
    .then(data => {
      data.update(req.body, {
        where: { member_category_id: req.body.member_category_id }
      });

      data.setMembers([],{
        force: true
      })
        .then(num=>{
          //let tmp=0    
          for(let key in req.body.members){
            let mb = req.body.members[key].member_id
            console.log(mb)
            data.addMembers([mb])
          }
            res.send({
              message: "會員類別更新成功"
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
    Member_category.findByPk(id,{
      include: [db.member]
    })
    .then(data => {
      data.setMembers([],)
      .then(mb=>{
        data.destroy()
        .then(num=>{
          if(num) {
            res.send({
            message: "刪除成功"
            });
          }
          else {
            res.status(500).send({
            message: `Cannot delete Member_category with id=${id}. Maybe Member_category was not found!`
            });
          };
        });
      })
      .catch(err => {
        res.status(500).send({
          message: `Cannot delete Member_category with id=${id}. Maybe Member_category was not found!`
        });
      });
    })
    .catch(err => {
      res.status(500).send({
          message: `Cannot delete Member_category with id=${id}. Maybe Member_category was not found!`
      });
    });
  },

};

module.exports = member_categoryController;