const express = require('express');
const router = express.Router();
const member_categoryController = require('../../controllers/member_category.controller.js');


//新增單個產品
router.post("/", member_categoryController.create);
//獲取所有產品
router.get("/", member_categoryController.getAll);
//取得 最大ID
router.get("/max", member_categoryController.getMaxID);
//獲取單個產品 :id代表動態路由，用於匹配任意string
router.get("/:id", member_categoryController.getOne);
//修改單個產品
router.put('/:id', member_categoryController.update);
//刪除單個產品
router.delete('/:id', member_categoryController.delete);

module.exports = router;