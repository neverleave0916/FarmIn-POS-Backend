const express = require('express');
const router = express.Router();
const purchaseproductsController = require('../../controllers/purchaseproducts.controller.js');

  // 新增 Tutorial
  router.post("/", purchaseproductsController.create);

  // Retrieve all Tutorials
  router.get("/", purchaseproductsController.findAll);

  router.get("/:id", purchaseproductsController.findOne);
  // Retrieve all published Tutorials
  //router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
//   router.get("/:id", productController.findOne);

module.exports = router;