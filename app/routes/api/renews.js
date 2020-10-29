const express = require('express');
const router = express.Router();
const renewController = require('../../controllers/renew.controller.js');

router.get("/member/:id", renewController.getByMember);
//新增 採收紀錄(含產品)
router.post("/", renewController.create);

//取得 所有供應商(含供應產品)
router.get("/", renewController.getAll);

//取得 最大ID
router.get("/max", renewController.getMaxID);

//取得 單一採收紀錄(含產品)
router.get("/:id", renewController.getOne);

//更新 採收紀錄(含產品)
router.put('/:id', renewController.update);

//刪除 採收紀錄(含產品)
router.delete('/:id', renewController.delete);

module.exports = router;



// {
//     "renew_id": "S0003",
//     "renew_name": "XX牧場",
//     "renew_phone": "0936545415",
//     "renew_address": "花蓮縣富里鄉忠明七街682號",
//     "renew_desc": null,
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