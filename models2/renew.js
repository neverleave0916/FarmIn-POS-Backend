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
      field: "renew_id"
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
    transaction_id: {
      type: DataTypes.CHAR(15),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "transaction_id",
      references: {
        key: "transaction_id",
        model: "transaction_model"
      }
    },
    renew_start_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "renew_start_dt"
    },
    renew_end_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "renew_end_dt"
    },
    renew_cycle: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "renew_cycle"
    }
  };
  const options = {
    tableName: "renew",
    comment: "",
    indexes: [{
      name: "member_id",
      unique: false,
      type: "BTREE",
      fields: ["member_id"]
    }, {
      name: "transaction_id",
      unique: false,
      type: "BTREE",
      fields: ["transaction_id"]
    }]
  };
  const RenewModel = sequelize.define("renew_model", attributes, options);
  return RenewModel;
};