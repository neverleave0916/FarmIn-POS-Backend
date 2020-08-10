const db = require("../models"); //引入
const Published_status = db.published_status;
const Op = db.Sequelize.Op;
const published_statusController = {

  create(req, res){

    if (!req.body.published_status_id) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    Published_status.create(req.body)
      .then(data => {
        res.send(data);
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
      
    Published_status.findAll({ where: condition })
      .then(data => {
        res.send(data);
      }); 
  },

  findOne(req, res){
    const id = req.params.id;
      
    Published_status.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  }
}

module.exports = published_statusController;