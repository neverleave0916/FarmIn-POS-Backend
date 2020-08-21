const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    cart_status_id: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "cart_status_id"
    },
    cart_status_name: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cart_status_name"
    },
    cart_status_desc: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cart_status_desc"
    }
  };
  const options = {
    tableName: "cart_status",
    comment: "",
    indexes: []
  };
  const CartStatusModel = sequelize.define("cart_status_model", attributes, options);
  return CartStatusModel;
};