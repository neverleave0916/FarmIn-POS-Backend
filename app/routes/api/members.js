const express = require('express');
const router = express.Router();
const memberController = require('../../controllers/member.controller.js');

  // 新增 Tutorial
  router.post("/", memberController.create);

  // Retrieve all Tutorials
  router.get("/", memberController.findAll);

  router.get("/:id", memberController.findOne);

  router.put('/:id', memberController.update);

  router.delete('/:id', memberController.delete);

module.exports = router;