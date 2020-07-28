const express = require('express');
const router = express.Router();
const supplierController = require('../../controllers/supplier.controller.js');

  // 新增 Tutorial
  router.post("/", supplierController.create);

  // Retrieve all Tutorials
  router.get("/", supplierController.findAll);

  router.get("/:id", supplierController.findOne);

  router.put('/:id', supplierController.update);

  router.delete('/:id', supplierController.delete);

module.exports = router;