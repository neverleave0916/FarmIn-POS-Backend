const express = require('express');
const router = express.Router();
const productImageController = require('../../controllers/product_image.controller.js');

/**
 * @api {get} /products/:id Request Product information
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
router.post("/", productImageController.create);

//取得所有產品 //取得特定產品 特定種類產品
router.get("/", productImageController.getAll);

//取得 最大ID
router.get("/max", productImageController.getMaxID);

//取得特定產品 with id
router.get("/:id", productImageController.getOne);

//更新產品By ID
router.put('/:id', productImageController.update);

//刪除產品
router.delete('/:id', productImageController.delete);

module.exports = router;