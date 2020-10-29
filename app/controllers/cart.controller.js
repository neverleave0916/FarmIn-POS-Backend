const db = require("../models"); //引入
const Cart = db.cart;
const Op = db.Sequelize.Op;
const cartController = {
/**
 * @api {post} /carts 新增一筆購物車
 * @apiName 新增購物車
 * @apiGroup Carts
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
    create(req, res){
      // Validate request
      if (!req.body.member_id) {
        res.status(400).send({
          message: "缺少Member ID"
        });
        return;
      }
    
      // Save Tutorial in the database
      Cart.create(req.body)
        .then(data => {
          for(let key in req.body.products){
            let pd = req.body.products[key].product_id
            data.addProducts([pd]);
          }
          console.log(data)
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
      Cart.findAll({
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
  


    getMaxID(req, res) {
      Cart.max('cart_update_dt', {
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
  
    Cart.findByPk(id,{
        include: [db.product]
      })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving 購物車 with id=" + id
        });
      });
  },
    
  update(req, res){
    const id = req.params.id;
    Cart.findByPk(id,{
      include: [db.product]
    })
    .then(data => {
      data.update(req.body, {
        where: { member_id: req.body.member_id }
      });

      data.setProducts([],{
        force: true
      })
        .then(num=>{
          //let tmp=0    
          for(let key in req.body.products){
            let pd = req.body.products[key].product_id
            console.log(pd)
            data.addProducts([pd])
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

  delete(req, res){
    const id = req.params.id;
  
    Cart.findByPk(id,{
      include: [db.product]
    })
    .then(data => {
      data.setProducts([],)
      .then(pd=>{
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

module.exports = cartController;