const express = require('express');
const router = express.Router();
const dispose_participate_productController = require('../../controllers/dispose_participate_product.controller.js');

/**
 * @api {get} /dispose_participate_products/:id Request Product information
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
  router.post("/", dispose_participate_productController.create);

  // Retrieve all Tutorials
  router.get("/", dispose_participate_productController.findAll);

  // Retrieve all published Tutorials
  //router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", dispose_participate_productController.findOne);

  // router.put('/:id', dispose_participate_productController.update);

  // router.delete('/:id', dispose_participate_productController.delete);

/** 
router.get('/dispose_participate_products', dispose_participate_productController.all);
router.get('/dispose_participate_products/:id', dispose_participate_productController.byId);
router.post('/dispose_participate_products', dispose_participate_productController.create);
router.put('/dispose_participate_products/:id', dispose_participate_productController.update);
router.delete('/dispose_participate_products/:id', dispose_participate_productController.remove);
*/
//獲取所有產品
/** 
router.get('/dispose_participate_products', dispose_participate_productController.findAll);
//獲取單個產品 :id代表動態路由，用於匹配任意string
router.get('/dispose_participate_products/:id', dispose_participate_productController.findOne);
//新增單個產品
router.post('/dispose_participate_products', dispose_participate_productController.create);
//修改單個產品
router.put('/dispose_participate_products/:id', dispose_participate_productController.update);
//刪除單個產品
router.delete('/dispose_participate_products/:id', dispose_participate_productController.remove);
//刪除所有產品*/
router.delete("/", dispose_participate_productController.deleteAll);
module.exports = router;