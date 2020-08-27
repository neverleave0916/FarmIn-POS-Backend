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
      field: "harvest_id",
      references: {
        key: "harvest_id",
        model: "harvest_model"
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
    harvest_participate_product_amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "harvest_participate_product_amount"
    }
  };
  const options = {
    tableName: "harvest_participate_product",
    comment: "",
    indexes: [{
      name: "product_id",
      unique: false,
      type: "BTREE",
      fields: ["product_id"]
    }]
  };
  const HarvestParticipateProductModel = sequelize.define("harvest_participate_product_model", attributes, options);
  return HarvestParticipateProductModel;
};