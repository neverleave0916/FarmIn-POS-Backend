module.exports = (sequelize, DataTypes) => {
  return sequelize.define("product", {
      "product_id": { //產品編號
        type: DataTypes.CHAR(6),
        allowNull: false,
        primaryKey: true
      },
      "product_category_id": { //產品類別編號
        type: DataTypes.CHAR(5),
        allowNull: false
      },
      "publish_status_id": {  //發布狀態編號
        type: DataTypes.CHAR(3),
        allowNull: false
      },
      "product_name": { //產品名稱
        type: DataTypes.STRING(20),
        allowNull: false
      },
      "product_unit": { //產品單位
        type: DataTypes.CHAR(5),
        allowNull: false
      },
      "product_unit_price": { //產品單價
        type: DataTypes.FLOAT,
        allowNull: false
      },
      "product_inventory": { //產品庫存
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      "product_description": { //產品說明
        type: DataTypes.STRING(256),
        allowNull: false
      },
      "product_growth_period": { //產品生長期
        type: DataTypes.FLOAT,
        allowNull: false
      },
      "product_exp": { //產品保存期限
        type: DataTypes.FLOAT,
        allowNull: false
      },
      "product_default_reserve_amount": { //產品預設保留數量
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      "product_actual_reserve_amount": { //產品實際保留數量
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      "product_online_unit": { //產品線上單位
        type: DataTypes.CHAR(5),
        allowNull: false
      },
      "product_online_unit_price": {  //產品線上單價
        type: DataTypes.FLOAT,
        allowNull: false
      },
      "product_online_inventory": { //產品線上庫存
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      "product_online_inventory_limit": {  //產品線上庫存上限
        type: DataTypes.INTEGER(11),
        allowNull: false
      }
    }
    );}/*, {
      tableName: '產品'
    });
  //};*/