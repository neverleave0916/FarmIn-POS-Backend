const express = require('express');
const router = express.Router();
const cart_statusController = require('../../controllers/cart_status.controller.js');

/**
 * @api {get} /cart_statuss/:id Request Product information
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
router.post("/", cart_statusController.create);

//取得 所有採收紀錄(含產品)
router.get("/", cart_statusController.getAll);

//取得 最大ID
router.get("/max", cart_statusController.getMaxID);

//取得 單一採收紀錄(含產品)
router.get("/:id", cart_statusController.getOne);

//更新 採收紀錄(含產品)
router.put('/:id', cart_statusController.update);

//刪除 採收紀錄(含產品)
router.delete('/:id', cart_statusController.delete);

module.exports = router;