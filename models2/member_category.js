const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    member_category_id: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "member_category_id"
    },
    member_category_name: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "member_category_name"
    },
    member_category_desc: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "member_category_desc"
    }
  };
  const options = {
    tableName: "member_category",
    comment: "",
    indexes: []
  };
  const MemberCategoryModel = sequelize.define("member_category_model", attributes, options);
  return MemberCategoryModel;
};