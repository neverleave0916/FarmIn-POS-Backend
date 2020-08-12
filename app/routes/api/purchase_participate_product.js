const express = require('express');
const router = express.Router();
const purchase_participate_productController = require('../../controllers/purchase_participate_product.controller.js');

/**
 * @api {get} /purchase_participate_products/:id Request Product information
 * @apiName GetUser
 * @apiGroup 產品
 * 
 * @apiParam {String} id Users unique ID.
 * @apiParam {String} group unique ID.
 * 
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

  // 新增 Tutorial
  router.post("/", purchase_participate_productController.create);

  // Retrieve all Tutorials
  router.get("/", purchase_participate_productController.findAll);

  // Retrieve all published Tutorials
  //router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", purchase_participate_productController.findOne);

  // router.put('/:id', purchase_participate_productController.update);

  // router.delete('/:id', purchase_participate_productController.delete);

/** 
router.get('/purchase_participate_products', purchase_participate_productController.all);
router.get('/purchase_participate_products/:id', purchase_participate_productController.byId);
router.post('/purchase_participate_products', purchase_participate_productController.create);
router.put('/purchase_participate_products/:id', purchase_participate_productController.update);
router.delete('/purchase_participate_products/:id', purchase_participate_productController.remove);
*/
//獲取所有產品
/** 
router.get('/purchase_participate_products', purchase_participate_productController.findAll);
//獲取單個產品 :id代表動態路由，用於匹配任意string
router.get('/purchase_participate_products/:id', purchase_participate_productController.findOne);
//新增單個產品
router.post('/purchase_participate_products', purchase_participate_productController.create);
//修改單個產品
router.put('/purchase_participate_products/:id', purchase_participate_productController.update);
//刪除單個產品
router.delete('/purchase_participate_products/:id', purchase_participate_productController.remove);
//刪除所有產品*/
router.delete("/", purchase_participate_productController.deleteAll);
module.exports = router;