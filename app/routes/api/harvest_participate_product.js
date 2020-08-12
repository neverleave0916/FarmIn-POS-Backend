const express = require('express');
const router = express.Router();
const harvest_participate_productController = require('../../controllers/harvest_participate_product.controller.js');

/**
 * @api {get} /harvest_participate_products/:id Request Product information
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
  router.post("/", harvest_participate_productController.create);

  // Retrieve all Tutorials
  router.get("/", harvest_participate_productController.findAll);

  // Retrieve all published Tutorials
  //router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", harvest_participate_productController.findOne);

  // router.put('/:id', harvest_participate_productController.update);

  // router.delete('/:id', harvest_participate_productController.delete);

/** 
router.get('/harvest_participate_products', harvest_participate_productController.all);
router.get('/harvest_participate_products/:id', harvest_participate_productController.byId);
router.post('/harvest_participate_products', harvest_participate_productController.create);
router.put('/harvest_participate_products/:id', harvest_participate_productController.update);
router.delete('/harvest_participate_products/:id', harvest_participate_productController.remove);
*/
//獲取所有產品
/** 
router.get('/harvest_participate_products', harvest_participate_productController.findAll);
//獲取單個產品 :id代表動態路由，用於匹配任意string
router.get('/harvest_participate_products/:id', harvest_participate_productController.findOne);
//新增單個產品
router.post('/harvest_participate_products', harvest_participate_productController.create);
//修改單個產品
router.put('/harvest_participate_products/:id', harvest_participate_productController.update);
//刪除單個產品
router.delete('/harvest_participate_products/:id', harvest_participate_productController.remove);
//刪除所有產品*/
router.delete("/", harvest_participate_productController.deleteAll);
module.exports = router;