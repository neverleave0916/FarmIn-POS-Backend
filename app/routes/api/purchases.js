const express = require('express');
const router = express.Router();
const purchaseController = require('../../controllers/purchase.controller.js');

/**
 * @api {get} /purchases/:id Request Product information
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
router.post("/", purchaseController.create);

//取得 所有採收紀錄(含產品)
router.get("/", purchaseController.getAll);

//取得 最大ID
router.get("/max", purchaseController.getMaxID);

//取得 單一採收紀錄(含產品)
router.get("/:id", purchaseController.getOne);

//更新 採收紀錄(含產品)
router.put('/:id', purchaseController.update);

//刪除 採收紀錄(含產品)
router.delete('/:id', purchaseController.delete);

module.exports = router;