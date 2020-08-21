const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    member_id: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "member_id",
      references: {
        key: "member_id",
        model: "member_model"
      }
    },
    cart_status_id: {
      type: DataTypes.CHAR(4),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cart_status_id",
      references: {
        key: "cart_status_id",
        model: "cart_status_model"
      }
    },
    cart_update_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cart_update_dt"
    }
  };
  const options = {
    tableName: "cart",
    comment: "",
    indexes: [{
      name: "cart_status_id",
      unique: false,
      type: "BTREE",
      fields: ["cart_status_id"]
    }]
  };
  const CartModel = sequelize.define("cart_model", attributes, options);
  return CartModel;
};