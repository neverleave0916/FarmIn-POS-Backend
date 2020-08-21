const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
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
    product_online_category_id: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "product_online_category_id",
      references: {
        key: "product_online_category_id",
        model: "product_online_category_model"
      }
    }
  };
  const options = {
    tableName: "product_participate_product_online_category",
    comment: "",
    indexes: [{
      name: "product_online_category_id",
      unique: false,
      type: "BTREE",
      fields: ["product_online_category_id"]
    }]
  };
  const ProductParticipateProductOnlineCategoryModel = sequelize.define("product_participate_product_online_category_model", attributes, options);
  return ProductParticipateProductOnlineCategoryModel;
};