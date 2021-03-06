const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    adjust_id: {
      type: DataTypes.CHAR(16),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "adjust_id"
    },
    user_id: {
      type: DataTypes.CHAR(6),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "user_id",
      references: {
        key: "user_id",
        model: "user_model"
      }
    },
    adjust_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "adjust_dt"
    }
  };
  const options = {
    tableName: "adjust",
    comment: "",
    indexes: [{
      name: "user_id",
      unique: false,
      type: "BTREE",
      fields: ["user_id"]
    }]
  };
  const AdjustModel = sequelize.define("adjust_model", attributes, options);
  return AdjustModel;
};