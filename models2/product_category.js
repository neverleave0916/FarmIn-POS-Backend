const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    product_category_id: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "product_category_id"
    },
    product_category_name: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_category_name"
    },
    product_category_desc: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_category_desc"
    },
    product_category_img: {
      type: longblob,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_category_img"
    },
    product_category_sort: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_category_sort"
    },
    product_category_parent: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_category_parent",
      references: {
        key: "product_category_id",
        model: "product_category_model"
      }
    }
  };
  const options = {
    tableName: "product_category",
    comment: "",
    indexes: [{
      name: "product_category_parent",
      unique: false,
      type: "BTREE",
      fields: ["product_category_parent"]
    }]
  };
  const ProductCategoryModel = sequelize.define("product_category_model", attributes, options);
  return ProductCategoryModel;
};