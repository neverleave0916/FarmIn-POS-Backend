const express = require('express');
const router = express.Router();
const productController = require('../../controllers/product.controller.js');

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

  // 新增 Tutorial
  router.post("/", productController.create);

  // Retrieve all Tutorials
  router.get("/", productController.findAll);

  // Retrieve all published Tutorials
  //router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", productController.findOne);


  router.put('/:id', productController.update);

  router.delete('/:id', productController.delete);










/** 
router.get('/products', productController.all);
router.get('/products/:id', productController.byId);
router.post('/products', productController.create);
router.put('/products/:id', productController.update);
router.delete('/products/:id', productController.remove);
*/
//獲取所有產品
/** 
router.get('/products', productController.findAll);
//獲取單個產品 :id代表動態路由，用於匹配任意string
router.get('/products/:id', productController.findOne);
//新增單個產品
router.post('/products', productController.create);
//修改單個產品
router.put('/products/:id', productController.update);
//刪除單個產品
router.delete('/products/:id', productController.remove);
//刪除所有產品
router.delete("/products/", productController.deleteAll);*/
module.exports = router;