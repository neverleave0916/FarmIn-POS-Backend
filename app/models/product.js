module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
      "產品編號": {
        type: Sequelize.CHAR(6),
        primaryKey: true
      },
      "產品類別編號": {
        type: Sequelize.CHAR(5),
      },
      "發布狀態編號": {
        type: Sequelize.CHAR(3),
      },
      "產品名稱": {
        type: Sequelize.STRING(20),
      },
      "產品庫存": {
        type: Sequelize.INTEGER(11),
      }
    });

    return Product;
  };