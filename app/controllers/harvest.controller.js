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

  //取得所有採收紀錄(含產品)，或單筆紀錄用/?harvest_id=HARR202008200001
  getAll(req, res) {
    
    const title = req.query.harvest_id;
    //const title = 'HARR202008170003';
    var condition = title ? { harvest_id: { [Op.like]: `%${title}%` } } : null;
      
    Harvest.findAll({
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

  //取得單筆採收紀錄(含產品)，/HARR202008200001
  getOne(req, res){
    const id = req.params.id;
    
    Harvest.findByPk(id,{
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

  getMaxID(req, res) {
    Harvest.max('harvest_id')
    .then(data => {
      res.send(data);})
    .catch(err => {
      res.status(500).send({
        message: "Error getMaxID"
      });
    });
  },

  update(req, res){


    const id = req.params.id;


    Harvest.findByPk(id,{
      include: [db.product]
    })
    .then(data => {
      data.update(req.body, {
        where: { harvest_id: req.body.harvest_id }
      });

      data.setProducts([],).then(num=>{        
          for(let key in req.body.products){
            let vamount = req.body.products[key].amount
            let pd = req.body.products[key].product_id
            data.addProducts([pd],{ through:{harvest_participate_product_amount:vamount} });
          }
  
          if(num>=1){
            res.send({
              message: "產品更新成功"
            });
          }else{
            res.send({
              message: `Cannot update 採收紀錄`
            });
          }
          
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










//用採收ID取得所有採收產品
// const id = req.params.id;
    
// Harvest.findByPk(id,{
//   include: [db.product]
// })
// .then(data => {
//   data.getProducts().then(data2 => {
//     res.send(data2);
//   })
// })

//列出所有自動產生的方法
// const model = db.harvest;
// for (let assoc of Object.keys(model.associations)) {
//   for (let accessor of Object.keys(model.associations[assoc].accessors)) {
//     console.log(model.name + '.' + model.associations[assoc].accessors[accessor]+'()');
//   }
// }