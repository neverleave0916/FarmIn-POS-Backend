const express = require('express');
const router = express.Router();
const memberController = require('../../controllers/member.controller.js');

  // 新增 Tutorial
  router.post("/", memberController.create);

  // Retrieve all Tutorials
  router.get("/", memberController.findAll);

  router.get("/:id", memberController.findOne);
  // Retrieve all published Tutorials
  //router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
//   router.get("/:id", productController.findOne);

module.exports = router;