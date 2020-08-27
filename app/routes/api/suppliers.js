const express = require('express');
const router = express.Router();
const supplierController = require('../../controllers/supplier.controller.js');

//新增 採收紀錄(含產品)
router.post("/", supplierController.create);

//取得 所有供應商(含供應產品)
router.get("/", supplierController.getAll);

//取得 最大ID
router.get("/max", supplierController.getMaxID);

//取得 單一採收紀錄(含產品)
router.get("/:id", supplierController.getOne);

//更新 採收紀錄(含產品)
router.put('/:id', supplierController.update);

//刪除 採收紀錄(含產品)
router.delete('/:id', supplierController.delete);

module.exports = router;



// {
//     "supplier_id": "S0003",
//     "supplier_name": "XX牧場",
//     "supplier_phone": "0936545415",
//     "supplier_address": "花蓮縣富里鄉忠明七街682號",
//     "supplier_desc": null,
//     "deleted_at": null,
//     "products": [
//         {
//             "product_id": "PD0003",
//             "amount": 3
//         },
//         {
//             "product_id": "PD0004",
//             "amount": 4
//         }
//     ]
// }