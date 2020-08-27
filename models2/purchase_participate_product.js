const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    purchase_id: {
      type: DataTypes.CHAR(16),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "purchase_id",
      references: {
        key: "purchase_id",
        model: "purchase_model"
      }
    },
    product_id: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "product_id",
      references: {
        key: "product_id",
        model: "product_model"
      }
    },
    purchase_participate_product_unit: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "purchase_participate_product_unit"
    },
    purchase_participate_product_amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "purchase_participate_product_amount"
    },
    purchase_participate_product_unit_price: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "purchase_participate_product_unit_price"
    }
  };
  const options = {
    tableName: "purchase_participate_product",
    comment: "",
    indexes: [{
      name: "product_id",
      unique: false,
      type: "BTREE",
      fields: ["product_id"]
    }]
  };
  const PurchaseParticipateProductModel = sequelize.define("purchase_participate_product_model", attributes, options);
  return PurchaseParticipateProductModel;
};