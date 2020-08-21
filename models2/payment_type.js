const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    payment_type_id: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "payment_type_id"
    },
    payment_type_title: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "payment_type_title"
    },
    payment_type_desc: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "payment_type_desc"
    }
  };
  const options = {
    tableName: "payment_type",
    comment: "",
    indexes: []
  };
  const PaymentTypeModel = sequelize.define("payment_type_model", attributes, options);
  return PaymentTypeModel;
};