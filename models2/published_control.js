const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    published_control_id: {
      type: DataTypes.CHAR(8),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "published_control_id"
    },
    member_category_id: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "member_category_id",
      references: {
        key: "member_category_id",
        model: "member_category_model"
      }
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
    published_control_save_amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "published_control_save_amount"
    }
  };
  const options = {
    tableName: "published_control",
    comment: "",
    indexes: [{
      name: "product_id",
      unique: false,
      type: "BTREE",
      fields: ["product_id"]
    }, {
      name: "member_category_id",
      unique: false,
      type: "BTREE",
      fields: ["member_category_id"]
    }]
  };
  const PublishedControlModel = sequelize.define("published_control_model", attributes, options);
  return PublishedControlModel;
};