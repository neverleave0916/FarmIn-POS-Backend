const express = require('express');
const router = express.Router();
const transactionController = require('../../controllers/transaction.controller.js');

router.post("/", transactionController.create);

//取得 所有交易紀錄(含產品)
router.get("/", transactionController.getAll);

//取得 最大ID
router.get("/max", transactionController.getMaxID);

//取得 單一交易紀錄(含產品)
router.get("/:id", transactionController.getOne);

//更新 交易紀錄(含產品)
router.put('/:id', transactionController.update);

//刪除 交易紀錄(含產品)
router.delete('/:id', transactionController.delete);

module.exports = router;


//新增 更新 交易紀錄(含產品)
// {
//     "transaction_id": "TX2020082000005",
//     "member_id": "M10001",
//     "transaction_src_id": "TSRC01",
//     "transaction_status_id": "TSTAT01",
//     "payment_type_id": "PM01",
//     "transaction_create_dt": "2020-08-20 00:00:00",
//     "transaction_subtotal": 200,
//     "transaction_discount": 0,
//     "transaction_total": 200,
//     "transaction_paid": 200,
//     "transaction_pay_dt": "2020-08-20 00:00:00",
//     "transaction_remark": null,
//     "deleted_at": null,
//         "products": [
//         {
//             "product_id": "PD0001",
//             "unit":"包",
//             "amount": 2,
//             "unit_price":"40"
//         },
//         {
//             "product_id": "PD0003",
//             "unit":"包",
//             "amount": 3,
//             "unit_price":"40"
//         }
//     ]
// }