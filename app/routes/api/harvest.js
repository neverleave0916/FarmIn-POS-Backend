const express = require('express');
const router = express.Router();
const harvestController = require('../../controllers/harvest.controller.js');

/**
 * @api {get} /harvests/:id Request Product information
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
  router.post("/", harvestController.create);

  // Retrieve all Tutorials
  router.get("/", harvestController.findAll);

  // Retrieve all published Tutorials
  //router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", harvestController.findOne);

  router.get("/BigID/BigID", harvestController.getBigID);

  // router.put('/:id', harvestController.update);

  // router.delete('/:id', harvestController.delete);

/** 
router.get('/harvests', harvestController.all);
router.get('/harvests/:id', harvestController.byId);
router.post('/harvests', harvestController.create);
router.put('/harvests/:id', harvestController.update);
router.delete('/harvests/:id', harvestController.remove);
*/
//獲取所有產品
/** 
router.get('/harvests', harvestController.findAll);
//獲取單個產品 :id代表動態路由，用於匹配任意string
router.get('/harvests/:id', harvestController.findOne);
//新增單個產品
router.post('/harvests', harvestController.create);
//修改單個產品
router.put('/harvests/:id', harvestController.update);
//刪除單個產品
router.delete('/harvests/:id', harvestController.remove);
//刪除所有產品*/
router.delete("/", harvestController.deleteAll);
module.exports = router;