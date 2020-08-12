const express = require('express');
const router = express.Router();
const adjustController = require('../../controllers/adjust.controller.js');

/**
 * @api {get} /adjusts/:id Request Product information
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
  router.post("/", adjustController.create);

  // Retrieve all Tutorials
  router.get("/", adjustController.findAll);

  // Retrieve all published Tutorials
  //router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", adjustController.findOne);

  router.get("/BigID/BigID", adjustController.getBigID);

  // router.put('/:id', adjustController.update);

  // router.delete('/:id', adjustController.delete);

/** 
router.get('/adjusts', adjustController.all);
router.get('/adjusts/:id', adjustController.byId);
router.post('/adjusts', adjustController.create);
router.put('/adjusts/:id', adjustController.update);
router.delete('/adjusts/:id', adjustController.remove);
*/
//獲取所有產品
/** 
router.get('/adjusts', adjustController.findAll);
//獲取單個產品 :id代表動態路由，用於匹配任意string
router.get('/adjusts/:id', adjustController.findOne);
//新增單個產品
router.post('/adjusts', adjustController.create);
//修改單個產品
router.put('/adjusts/:id', adjustController.update);
//刪除單個產品
router.delete('/adjusts/:id', adjustController.remove);
//刪除所有產品*/
router.delete("/", adjustController.deleteAll);
module.exports = router;