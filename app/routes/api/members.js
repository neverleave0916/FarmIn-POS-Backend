const express = require('express');
const router = express.Router();
const memberController = require('../../controllers/member.controller.js');

<<<<<<< Updated upstream
  // 新增 Tutorial
  router.post("/", memberController.create);

  // Retrieve all Tutorials
  router.get("/", memberController.findAll);

  router.get("/:id", memberController.findOne);
  // Retrieve all published Tutorials
  //router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
//   router.get("/:id", productController.findOne);
=======
/**
 * @api {get} /members/:id Request Product information
 * @apiName GetUser
 * @apiGroup 產品
 * 
 * @apiParam {String} id Users unique ID.
 * @apiParam {String} group unique ID.
 * 
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

//新增產品
router.post("/", memberController.create);

//取得所有產品 //取得特定產品 特定種類產品
router.get("/", memberController.getAll);

//取得 最大ID
router.get("/max", memberController.getMaxID);

//取得特定產品 with id
router.get("/:id", memberController.getOne);

//更新產品By ID
router.put('/:id', memberController.update);

//刪除產品
router.delete('/:id', memberController.delete);
>>>>>>> Stashed changes

module.exports = router;