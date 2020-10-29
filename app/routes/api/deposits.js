const express = require('express');
const router = express.Router();
const depositController = require('../../controllers/deposit.controller.js');

/**
 * @api {get} /deposits/:id Request Product information
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
router.post("/", depositController.create);

//取得所有產品 //取得特定產品 特定種類產品
router.get("/", depositController.getAll);

//取得 最大ID
router.get("/max", depositController.getMaxID);

//取得特定產品 with id
router.get("/:id", depositController.getOne);

//更新產品By ID
router.put('/:id', depositController.update);

//刪除產品
router.delete('/:id', depositController.delete);

module.exports = router;