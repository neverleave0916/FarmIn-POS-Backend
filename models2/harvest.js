const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    harvest_id: {
      type: DataTypes.CHAR(16),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "harvest_id"
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
    harvest_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "harvest_dt"
    }
  };
  const options = {
    tableName: "harvest",
    comment: "",
    indexes: [{
      name: "user_id",
      unique: false,
      type: "BTREE",
      fields: ["user_id"]
    }]
  };
  const HarvestModel = sequelize.define("harvest_model", attributes, options);
  return HarvestModel;
};