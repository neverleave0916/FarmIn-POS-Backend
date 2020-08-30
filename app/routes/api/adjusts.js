const express = require('express');
const router = express.Router();
const adjustController = require('../../controllers/adjust.controller.js');

/**
 * @api {get} /adjusts/:id Request Product information
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
router.post("/", adjustController.create);

//取得 所有採收紀錄(含產品)
router.get("/", adjustController.getAll);

//取得 最大ID
router.get("/max", adjustController.getMaxID);

//取得 單一採收紀錄(含產品)
router.get("/:id", adjustController.getOne);

//更新 採收紀錄(含產品)
router.put('/:id', adjustController.update);

//刪除 採收紀錄(含產品)
router.delete('/:id', adjustController.delete);

module.exports = router;