const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    transaction_src_id: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "transaction_src_id"
    },
    transaction_src_name: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "transaction_src_name"
    },
    transaction_src_desc: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "transaction_src_desc"
    }
  };
  const options = {
    tableName: "transaction_src",
    comment: "",
    indexes: []
  };
  const TransactionSrcModel = sequelize.define("transaction_src_model", attributes, options);
  return TransactionSrcModel;
};