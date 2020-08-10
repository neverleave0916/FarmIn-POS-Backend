const express = require('express');
const router = express.Router();
const product_categoryController = require('../../controllers/product_category.controller.js');

/**
 * @api {get} /product_categorys/:id Request Product information
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
  router.post("/", product_categoryController.create);

  // Retrieve all Tutorials
  router.get("/", product_categoryController.findAll);

  // Retrieve all published Tutorials
  //router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", product_categoryController.findOne);

  // router.put('/:id', product_categoryController.update);

  // router.delete('/:id', product_categoryController.delete);

/** 
router.get('/product_categorys', product_categoryController.all);
router.get('/product_categorys/:id', product_categoryController.byId);
router.post('/product_categorys', product_categoryController.create);
router.put('/product_categorys/:id', product_categoryController.update);
router.delete('/product_categorys/:id', product_categoryController.remove);
*/
//獲取所有產品
/** 
router.get('/product_categorys', product_categoryController.findAll);
//獲取單個產品 :id代表動態路由，用於匹配任意string
router.get('/product_categorys/:id', product_categoryController.findOne);
//新增單個產品
router.post('/product_categorys', product_categoryController.create);
//修改單個產品
router.put('/product_categorys/:id', product_categoryController.update);
//刪除單個產品
router.delete('/product_categorys/:id', product_categoryController.remove);
//刪除所有產品
router.delete("/product_categorys/", product_categoryController.deleteAll);*/
module.exports = router;