const db = require("../models"); //引入
const Harvest = db.harvest;
const Harvest_product = db.harvest_participate_product;
const Op = db.Sequelize.Op;
const harvestController = {

//   {
//     "harvest_id":"HARR202008200001",
//     "user_id": "ADM001",
//     "harvest_dt": "2020-8-19 23:23:40",
//     "product": 
//     [{
//         "product_id":"PD0001",
//         "amount":"10"
//     },{
//         "product_id":"PD0002",
//         "amount":"10"
//     }]
// }

  //新增產品採收紀錄
  create(req, res){
    let status=0,error=""
    if (!req.body.harvest_id) {    
      res.status(400).send({
        message: "harvest_id can not be empty!"
      });
      return;
    }

    const HarvestData = {
      "harvest_id": req.body.harvest_id,
      "user_id": req.body.user_id,
      "harvest_datetime": req.body.harvest_dt
    }

    //新增採收紀錄
    Harvest.create(HarvestData)
      .then(data => {
        //status=200
        //res.send(data);

        //一筆一筆新增採收產品
        req.body.product.forEach(function(obj,index) {
          const Harvest_ProductData = {
            "harvest_id": req.body.harvest_id,
            "product_id": obj.product_id,
            "harvest_participate_product_amount": obj.amount
          }
    
          Harvest_product.create(Harvest_ProductData)
            .then(data => {
              //res.send(data);
              if((index+1)>=req.body.product.length){
                res.status(200).send({
                  message:"新增成功"
                  });
              }
            })
            .catch(err => {
              res.status(500).send({
                message:err.message
              });
              return;
              //return;          
            });  
        });



      })
      .catch(err => {
        res.status(500).send({
          message:err.message
        });
        return;     
      });

  },

  //以下還沒看!!
  getAll(req, res) {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    var responseData = null;
      
    Harvest.findAll({ where: condition })
      .then(data => {
        responseData = data
      });
    Harvest_product.findAll({ where: condition })
      .then(data => {
        responseData.push(data)
        res.send(responseData)
      }); 
  },

  getOne(req, res){
    const id = req.params.id;
    var responseData = null;

    Harvest.findByPk(id)
      .then(data => {
        responseData = data
      })
      .catch(err => {
        res.status(500).send({
          message: "Error getOne with id=" + id
        });
      });

    Harvest_product.findByPk(id)
      .then(data => {
        responseData.push(data)
        res.send(responseData)
      })
      .catch(err => {
        res.status(500).send({
          message: "Error getOne with id=" + id
        });
      });
  },

  getMaxID(req, res) {
    Harvest.findOne({ order:[['harvest_id', 'DESC']], limit:1})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.log(err)
        res.status(500).send({
          message: "Error getMaxID with id=" + id
        });
      });
  },

  deleteAll(req, res) {
    Harvest_product.destroy({
      where: {}
    })
    Harvest.destroy({
      where: {}
    })
  }
}

module.exports = harvestController;