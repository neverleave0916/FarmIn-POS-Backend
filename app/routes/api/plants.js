const express = require('express');
const router = express.Router();
const plantController = require('../../controllers/plant.controller.js');

/**
 * @api {get} /plants/:id Request Product information
 * @apiName GetUser
 * @apiGroup 產品
 * 
 * @apiParam {String} id Users unique ID.
 * @apiParam {String} group unique ID.
 * 
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

//新增 採收紀錄(含產品)
router.post("/", plantController.create);

//取得 所有採收紀錄(含產品)
router.get("/", plantController.getAll);

//取得 最大ID
router.get("/max", plantController.getMaxID);

//取得 單一採收紀錄(含產品)
router.get("/:id", plantController.getOne);

//更新 採收紀錄(含產品)
router.put('/:id', plantController.update);

//刪除 採收紀錄(含產品)
router.delete('/:id', plantController.delete);

module.exports = router;