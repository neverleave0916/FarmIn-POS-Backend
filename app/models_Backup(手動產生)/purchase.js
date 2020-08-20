module.exports = (sequelize, DataTypes) => {
  return sequelize.define("purchase", {
      "purchase_id": { //進貨編號
        type: DataTypes.CHAR(16),
        allowNull: false,
        primaryKey: true
      },
      "user_id": { //使用者編號
        type: DataTypes.CHAR(6),
        allowNull: false
      },
      "purchase_date": {  //進貨日期
        type: DataTypes.DATE,
        allowNull: false
      },
      "purchase_sub": { //進貨小計
        type: DataTypes.FLOAT,
        allowNull: false
      },
      "purchase_discount": { //進貨折扣
        type: DataTypes.FLOAT,
        allowNull: false
      },
      "purchase_total": { //進貨總計
        type: DataTypes.FLOAT,
        allowNull: false
      }
    }
  );
}