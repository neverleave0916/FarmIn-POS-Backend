const express = require('express');
const router = express.Router();
const cartController = require('../../controllers/cart.controller.js');

/**
 * @api {get} /carts/:id Request Product information
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
router.post("/", cartController.create);

//取得 所有採收紀錄(含產品)
router.get("/", cartController.getAll);

//取得 最大ID
router.get("/max", cartController.getMaxID);

//取得 單一採收紀錄(含產品)
router.get("/:id", cartController.getOne);

//更新 採收紀錄(含產品)
router.put('/:id', cartController.update);

//刪除 採收紀錄(含產品)
router.delete('/:id', cartController.delete);

module.exports = router;