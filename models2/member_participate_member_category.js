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
    member_category_id: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "member_category_id",
      references: {
        key: "member_category_id",
        model: "member_category_model"
      }
    }
  };
  const options = {
    tableName: "member_participate_member_category",
    comment: "",
    indexes: [{
      name: "member_category_id",
      unique: false,
      type: "BTREE",
      fields: ["member_category_id"]
    }]
  };
  const MemberParticipateMemberCategoryModel = sequelize.define("member_participate_member_category_model", attributes, options);
  return MemberParticipateMemberCategoryModel;
};