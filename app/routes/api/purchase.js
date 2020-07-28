const express = require('express');
const router = express.Router();
const purchaseController = require('../../controllers/purchase.controller.js');

  // 新增 Tutorial
  router.post("/", purchaseController.create);

  // Retrieve all Tutorials
  router.get("/", purchaseController.findAll);

  router.get("/:id", purchaseController.findOne);
  // Retrieve all published Tutorials
  //router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
//   router.get("/:id", productController.findOne);

module.exports = router;