const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    transaction_status_id: {
      type: DataTypes.CHAR(7),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "transaction_status_id"
    },
    transaction_status_name: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "transaction_status_name"
    },
    transaction_status_desc: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "transaction_status_desc"
    }
  };
  const options = {
    tableName: "transaction_status",
    comment: "",
    indexes: []
  };
  const TransactionStatusModel = sequelize.define("transaction_status_model", attributes, options);
  return TransactionStatusModel;
};