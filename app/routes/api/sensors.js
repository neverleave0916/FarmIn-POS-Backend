const express = require('express');
const router = express.Router();
const sensorController = require('../../controllers/sensor.controller.js');

/**
 * @api {get} /sensors/:id Request Product information
 * @apiName GetUser
 * @apiGroup 產品
 * 
 * @apiParam {String} id Users unique ID.
 * @apiParam {String} group unique ID.
 * 
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

//新增產品
router.post("/", sensorController.create);

//取得所有產品 //取得特定產品 特定種類產品
router.get("/", sensorController.getAll);

//取得 最大ID
router.get("/max", sensorController.getMaxID);

//取得特定產品 with id
router.get("/:id", sensorController.getOne);

//更新產品By ID
router.put('/:id', sensorController.update);

//刪除產品
router.delete('/:id', sensorController.delete);

module.exports = router;

// {
//     "temperature": 37.5,
//     "humidity": 87.8,
//     "water_level": 1000,
//     "Illuminance": 465,
//     "soil_moisture": 922,
//     "deleted_at": null
// }