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
        model: "cart_model"
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
    }
  };
  const options = {
    tableName: "cart_participate_product",
    comment: "",
    indexes: [{
      name: "member_id",
      unique: false,
      type: "BTREE",
      fields: ["member_id"]
    }]
  };
  const CartParticipateProductModel = sequelize.define("cart_participate_product_model", attributes, options);
  return CartParticipateProductModel;
};