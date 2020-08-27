const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    product_online_category_id: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "product_online_category_id"
    },
    product_online_category_title: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_online_category_title"
    },
    product_online_category_desc: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_online_category_desc"
    },
    product_online_category_img: {
      type: longblob,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_online_category_img"
    },
    product_online_category_sort: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_online_category_sort"
    },
    product_online_category_parent: {
      type: DataTypes.CHAR(6),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_online_category_parent",
      references: {
        key: "product_online_category_id",
        model: "product_online_category_model"
      }
    }
  };
  const options = {
    tableName: "product_online_category",
    comment: "",
    indexes: [{
      name: "product_online_category_parent",
      unique: false,
      type: "BTREE",
      fields: ["product_online_category_parent"]
    }]
  };
  const ProductOnlineCategoryModel = sequelize.define("product_online_category_model", attributes, options);
  return ProductOnlineCategoryModel;
};