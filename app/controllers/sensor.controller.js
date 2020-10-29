const db = require("../models"); //引入
const Sensor = db.sensor;
const Op = db.Sequelize.Op;
const sensorController = {

    create(req, res){
      // Save Tutorial in the database
      Sensor.create(req.body)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the sensor."
          });
        });
    },
  
  
    getAll(req, res) {
      Sensor.findAll()
        .then(data => {
          res.send(data);
        }); 
    },
  


    getMaxID(req, res) {
      Sensor.max('sensor_id',{
        paranoid: false
      })
      .then(data => {
        res.send(''+data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error getMaxID"+err
        });
      });
    },


    // Find a single Tutorial with an id
  getOne(req, res){
    const id = req.params.id;
  
    Sensor.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving sensor with id=" + id
        });
      });
  },
    
  update(req, res){
    const id = req.params.id;
    Sensor.update(req.body, {
      where: { sensor_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "產品更新成功"
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        console.log(err)
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
  },

  delete(req, res){
    const id = req.params.id;
  
    Sensor.destroy({
      where: { sensor_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "產品 was deleted successfully!"
          });
        } else {
          res.status(500).send({
            message: `Cannot delete 產品 with id=${id}. Maybe 產品 was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete 產品 with id=" + id
        });
      });
  },

  };

module.exports = sensorController;