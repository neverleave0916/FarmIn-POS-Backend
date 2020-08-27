const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    renew_id: {
      type: DataTypes.CHAR(15),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "renew_id",
      references: {
        key: "renew_id",
        model: "renew_model"
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
    renew_participate_product_amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "renew_participate_product_amount"
    }
  };
  const options = {
    tableName: "renew_participate_product",
    comment: "",
    indexes: [{
      name: "product_id",
      unique: false,
      type: "BTREE",
      fields: ["product_id"]
    }]
  };
  const RenewParticipateProductModel = sequelize.define("renew_participate_product_model", attributes, options);
  return RenewParticipateProductModel;
};