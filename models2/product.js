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
      field: "product_id"
    },
    product_category_id: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_category_id",
      references: {
        key: "product_category_id",
        model: "product_category_model"
      }
    },
    published_status_id: {
      type: DataTypes.CHAR(3),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "published_status_id",
      references: {
        key: "published_status_id",
        model: "published_status_model"
      }
    },
    product_name: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_name"
    },
    product_unit: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_unit"
    },
    product_unit_price: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_unit_price"
    },
    product_inventory: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_inventory"
    },
    product_desc: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_desc"
    },
    product_growth_period: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_growth_period"
    },
    product_expire: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_expire"
    },
    product_default_save_amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_default_save_amount"
    },
    product_actual_save_amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_actual_save_amount"
    },
    product_online_unit: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_online_unit"
    },
    product_online_unit_price: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_online_unit_price"
    },
    product_online_inventory: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_online_inventory"
    },
    product_online_max_inventory: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_online_max_inventory"
    }
  };
  const options = {
    tableName: "product",
    comment: "",
    indexes: [{
      name: "product_category_id",
      unique: false,
      type: "BTREE",
      fields: ["product_category_id"]
    }, {
      name: "published_status_id",
      unique: false,
      type: "BTREE",
      fields: ["published_status_id"]
    }]
  };
  const ProductModel = sequelize.define("product_model", attributes, options);
  return ProductModel;
};