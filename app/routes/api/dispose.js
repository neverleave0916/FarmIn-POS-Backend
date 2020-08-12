const express = require('express');
const router = express.Router();
const disposeController = require('../../controllers/dispose.controller.js');

/**
 * @api {get} /disposes/:id Request Product information
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
  router.post("/", disposeController.create);

  // Retrieve all Tutorials
  router.get("/", disposeController.findAll);

  // Retrieve all published Tutorials
  //router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", disposeController.findOne);

  router.get("/BigID/BigID", disposeController.getBigID);

  // router.put('/:id', disposeController.update);

  // router.delete('/:id', disposeController.delete);

/** 
router.get('/disposes', disposeController.all);
router.get('/disposes/:id', disposeController.byId);
router.post('/disposes', disposeController.create);
router.put('/disposes/:id', disposeController.update);
router.delete('/disposes/:id', disposeController.remove);
*/
//獲取所有產品
/** 
router.get('/disposes', disposeController.findAll);
//獲取單個產品 :id代表動態路由，用於匹配任意string
router.get('/disposes/:id', disposeController.findOne);
//新增單個產品
router.post('/disposes', disposeController.create);
//修改單個產品
router.put('/disposes/:id', disposeController.update);
//刪除單個產品
router.delete('/disposes/:id', disposeController.remove);
//刪除所有產品*/
router.delete("/", disposeController.deleteAll);
module.exports = router;