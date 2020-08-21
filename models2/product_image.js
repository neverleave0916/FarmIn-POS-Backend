const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    product_image_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "product_image_id"
    },
    product_id: {
      type: DataTypes.CHAR(6),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_id",
      references: {
        key: "product_id",
        model: "product_model"
      }
    },
    product_image_data: {
      type: longblob,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_image_data"
    }
  };
  const options = {
    tableName: "product_image",
    comment: "",
    indexes: [{
      name: "product_id",
      unique: false,
      type: "BTREE",
      fields: ["product_id"]
    }]
  };
  const ProductImageModel = sequelize.define("product_image_model", attributes, options);
  return ProductImageModel;
};