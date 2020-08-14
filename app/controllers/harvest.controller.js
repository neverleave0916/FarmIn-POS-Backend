const db = require("../models"); //引入
const Harvest = db.harvest;
const Op = db.Sequelize.Op;
const harvestController = {

  create(req, res){

    if (!req.body.harvest_id) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    console.log(req.body)

    Harvest.create(req.body)
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

  findAll(req, res) {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
      
    Harvest.findAll({ where: condition })
      .then(data => {
        res.send(data);
      });
  },

  findOne(req, res){
    const id = req.params.id;

    Harvest.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  },

  getBigID(req, res) {
    Harvest.findOne({ order:[['harvest_id', 'DESC']], limit:1})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.log(err)
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  },

  deleteAll(req, res) {
    Harvest.destroy({
      where: {}
    })
  }
}

module.exports = harvestController;