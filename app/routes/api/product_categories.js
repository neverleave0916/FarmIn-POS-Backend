const express = require('express');
const router = express.Router();
const product_categoryController = require('../../controllers/product_category.controller.js');


//新增單個產品
router.post("/", product_categoryController.create);
//獲取所有產品
router.get("/", product_categoryController.getAll);
//獲取單個產品 :id代表動態路由，用於匹配任意string
router.get("/:id", product_categoryController.getOne);
//修改單個產品
router.put('/:id', product_categoryController.update);
//刪除單個產品
router.delete('/:id', product_categoryController.delete);

module.exports = router;