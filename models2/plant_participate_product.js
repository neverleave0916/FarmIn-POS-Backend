const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    plant_id: {
      type: DataTypes.CHAR(16),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "plant_id",
      references: {
        key: "plant_id",
        model: "plant_model"
      }
    },
    product_id: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "product_id",
      references: {
        key: "product_id",
        model: "product_model"
      }
    },
    plant_participate_product_amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "plant_participate_product_amount"
    }
  };
  const options = {
    tableName: "plant_participate_product",
    comment: "",
    indexes: [{
      name: "product_id",
      unique: false,
      type: "BTREE",
      fields: ["product_id"]
    }]
  };
  const PlantParticipateProductModel = sequelize.define("plant_participate_product_model", attributes, options);
  return PlantParticipateProductModel;
};