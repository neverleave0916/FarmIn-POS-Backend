const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    farm_info_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "farm_info_id"
    },
    farm_info_inage: {
      type: longblob,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "farm_info_inage"
    },
    farm_info_desc: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "farm_info_desc"
    },
    farm_info_update_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "farm_info_update_dt"
    }
  };
  const options = {
    tableName: "farm_info",
    comment: "",
    indexes: []
  };
  const FarmInfoModel = sequelize.define("farm_info_model", attributes, options);
  return FarmInfoModel;
};