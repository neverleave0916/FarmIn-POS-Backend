const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user.controller.js');

  // 新增 Tutorial
  router.post("/", userController.create);

  // Retrieve all Tutorials
  router.get("/", userController.findAll);

  router.get("/:id", userController.findOne);
  // Retrieve all published Tutorials
  //router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
//   router.get("/:id", productController.findOne);

module.exports = router;