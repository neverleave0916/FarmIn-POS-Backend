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
    if (!req.body.harvest_id) {    
      res.status(400).send({
        message: "harvest_id can not be empty!"
      });
      return;
    }

    //新增採收紀錄
    Harvest.create(req.body)
    .then(data=>{
      for(let key in req.body.product){
        let pi = req.body.product[key].product_id
        let amount = req.body.product[key].amount
        data.addProducts([pi],{ through:{
            harvest_participate_product_amount:amount,
        }});
      }
      for(let key in req.body.plants){
        let pa = req.body.plants[key].plant_id
        data.addPlants([pa]);
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
    Harvest.max('harvest_id',{
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




//   {
//     "harvest_id": "HARR202008200001", //用不到
//     "user_id": "ADM001",
//     "harvest_dt": "2020-01-25 16:00:00",
//     "products": [
//         {
//             "product_id": "PD0001",
//             "amount": 50
//         },
//         {
//             "product_id": "PD0003",
//             "amount": 20
//         },
//         {
//             "product_id": "PD0004",
//             "amount": 20
//         }
//     ]
// }
//更新採收紀錄(含產品)
  update(req, res){
    const id = req.params.id;

    Harvest.findByPk(id,{
      include: [db.product]
    })
    .then(data => {
      data.update(req.body, {
        where: { harvest_id: req.body.harvest_id }
      });

      data.setProducts([],{
        force: true
      }).then(num=>{        
          for(let key in req.body.products){
            let vamount = req.body.products[key].amount
            let pd = req.body.products[key].product_id
            data.addProducts([pd],{ through:{harvest_participate_product_amount:vamount} });
          }
  
          // if(num>=1){
            res.send({
              message: "產品更新成功"
            });
          // }else{
          //   res.status(500).send({
          //     message: `Cannot update 採收紀錄`
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
  //http://127.0.0.1:8080/api/harvests/HARR202008200001
  delete(req, res){
    const id = req.params.id;
    Harvest.findByPk(id,{
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
              message: `Cannot delete 採收紀錄 with id=${id}. Maybe 採收紀錄 was not found!`
            });
          };
        });
      })
      .catch(err => {
        res.status(500).send({
          message: `Cannot delete 採收紀錄 with id=${id}. Maybe 採收紀錄 was not found!`
        });
      });

      
    })
    .catch(err => {
      res.status(500).send({
        message: `Cannot delete 採收紀錄 with id=${id}. Maybe 採收紀錄 was not found!`
      });
    });
  },

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