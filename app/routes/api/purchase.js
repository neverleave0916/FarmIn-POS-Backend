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

  // 新增 Tutorial
  router.post("/", purchaseController.create);

  // Retrieve all Tutorials
  router.get("/", purchaseController.findAll);

  // Retrieve all published Tutorials
  //router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", purchaseController.findOne);

  router.get("/BigID/BigID", purchaseController.getBigID);

  // router.put('/:id', purchaseController.update);

  // router.delete('/:id', purchaseController.delete);

/** 
router.get('/purchases', purchaseController.all);
router.get('/purchases/:id', purchaseController.byId);
router.post('/purchases', purchaseController.create);
router.put('/purchases/:id', purchaseController.update);
router.delete('/purchases/:id', purchaseController.remove);
*/
//獲取所有產品
/** 
router.get('/purchases', purchaseController.findAll);
//獲取單個產品 :id代表動態路由，用於匹配任意string
router.get('/purchases/:id', purchaseController.findOne);
//新增單個產品
router.post('/purchases', purchaseController.create);
//修改單個產品
router.put('/purchases/:id', purchaseController.update);
//刪除單個產品
router.delete('/purchases/:id', purchaseController.remove);
//刪除所有產品*/
router.delete("/", purchaseController.deleteAll);
module.exports = router;