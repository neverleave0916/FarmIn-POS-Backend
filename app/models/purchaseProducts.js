module.exports = (sequelize, DataTypes) => {
  return sequelize.define("purchaseProducts", {
      "purchase_id": { //進貨編號
        type: DataTypes.CHAR(16),
        allowNull: false,
        primaryKey: true
      },
      "product_id": { //產品編號
        type: DataTypes.CHAR(6),
        allowNull: false
      },
      "purchase_unit": {  //進貨單位
        type: DataTypes.CHAR(5),
        allowNull: false
      },
      "purchase_amount": { //進貨數量
        type: DataTypes.INTEGER,
        allowNull: false
      },
      "purchase_unit_price": { //進貨單價
        type: DataTypes.FLOAT,
        allowNull: false
      }
    }
  );
}