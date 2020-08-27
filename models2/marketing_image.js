const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    marketing_image_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "marketing_image_id"
    },
    marketing_image_desc: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "marketing_image_desc"
    },
    marketing_image_data: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "marketing_image_data"
    },
    marketing_image_create_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "marketing_image_create_dt"
    }
  };
  const options = {
    tableName: "marketing_image",
    comment: "",
    indexes: []
  };
  const MarketingImageModel = sequelize.define("marketing_image_model", attributes, options);
  return MarketingImageModel;
};