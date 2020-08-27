const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    dispose_id: {
      type: DataTypes.CHAR(16),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "dispose_id"
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
    dispose_: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dispose_"
    }
  };
  const options = {
    tableName: "dispose",
    comment: "",
    indexes: [{
      name: "user_id",
      unique: false,
      type: "BTREE",
      fields: ["user_id"]
    }]
  };
  const DisposeModel = sequelize.define("dispose_model", attributes, options);
  return DisposeModel;
};