const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    deposit_id: {
      type: DataTypes.CHAR(15),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "deposit_id"
    },
    member_id: {
      type: DataTypes.CHAR(6),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "member_id",
      references: {
        key: "member_id",
        model: "member_model"
      }
    },
    deposit_amount: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "deposit_amount"
    },
    deposit_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "deposit_dt"
    }
  };
  const options = {
    tableName: "deposit",
    comment: "",
    indexes: [{
      name: "member_id",
      unique: false,
      type: "BTREE",
      fields: ["member_id"]
    }]
  };
  const DepositModel = sequelize.define("deposit_model", attributes, options);
  return DepositModel;
};