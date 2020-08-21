const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    transaction_id: {
      type: DataTypes.CHAR(15),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "transaction_id",
      references: {
        key: "transaction_id",
        model: "transaction_model"
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
    transaction_participate_product_unit: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "transaction_participate_product_unit"
    },
    transaction_participate_product_amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "transaction_participate_product_amount"
    },
    transaction_participate_product_unit_price: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "transaction_participate_product_unit_price"
    }
  };
  const options = {
    tableName: "transaction_participate_product",
    comment: "",
    indexes: [{
      name: "product_id",
      unique: false,
      type: "BTREE",
      fields: ["product_id"]
    }]
  };
  const TransactionParticipateProductModel = sequelize.define("transaction_participate_product_model", attributes, options);
  return TransactionParticipateProductModel;
};