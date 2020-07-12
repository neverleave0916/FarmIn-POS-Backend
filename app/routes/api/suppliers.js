const express = require('express');
const router = express.Router();
const supplierController = require('../../controllers/supplier.controller.js');

  // 新增 Tutorial
  router.post("/", supplierController.create);

  // Retrieve all Tutorials
  router.get("/", supplierController.findAll);

  router.get("/:id", supplierController.findOne);
  // Retrieve all published Tutorials
  //router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
//   router.get("/:id", productController.findOne);

module.exports = router;