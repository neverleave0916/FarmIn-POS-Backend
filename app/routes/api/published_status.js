const express = require('express');
const router = express.Router();
const published_statusController = require('../../controllers/published_status.controller.js');

/**
 * @api {get} /published_statuss/:id Request Product information
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
  router.post("/", published_statusController.create);

  // Retrieve all Tutorials
  router.get("/", published_statusController.findAll);

  // Retrieve all published Tutorials
  //router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", published_statusController.findOne);

  // router.put('/:id', published_statusController.update);

  // router.delete('/:id', published_statusController.delete);

/** 
router.get('/published_statuss', published_statusController.all);
router.get('/published_statuss/:id', published_statusController.byId);
router.post('/published_statuss', published_statusController.create);
router.put('/published_statuss/:id', published_statusController.update);
router.delete('/published_statuss/:id', published_statusController.remove);
*/
//獲取所有產品
/** 
router.get('/published_statuss', published_statusController.findAll);
//獲取單個產品 :id代表動態路由，用於匹配任意string
router.get('/published_statuss/:id', published_statusController.findOne);
//新增單個產品
router.post('/published_statuss', published_statusController.create);
//修改單個產品
router.put('/published_statuss/:id', published_statusController.update);
//刪除單個產品
router.delete('/published_statuss/:id', published_statusController.remove);
//刪除所有產品
router.delete("/published_statuss/", published_statusController.deleteAll);*/
module.exports = router;