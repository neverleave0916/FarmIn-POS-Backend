const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    supplier_id: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "supplier_id",
      references: {
        key: "supplier_id",
        model: "supplier_model"
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
    supplier_participate_product_amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "supplier_participate_product_amount"
    }
  };
  const options = {
    tableName: "supplier_participate_product",
    comment: "",
    indexes: [{
      name: "product_id",
      unique: false,
      type: "BTREE",
      fields: ["product_id"]
    }]
  };
  const SupplierParticipateProductModel = sequelize.define("supplier_participate_product_model", attributes, options);
  return SupplierParticipateProductModel;
};