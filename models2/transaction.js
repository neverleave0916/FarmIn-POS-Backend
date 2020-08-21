const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    transaction_id: {
      type: DataTypes.CHAR(15),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "transaction_id"
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
    transaction_src_id: {
      type: DataTypes.CHAR(6),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "transaction_src_id",
      references: {
        key: "transaction_src_id",
        model: "transaction_src_model"
      }
    },
    transaction_status_id: {
      type: DataTypes.CHAR(7),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "transaction_status_id",
      references: {
        key: "transaction_status_id",
        model: "transaction_status_model"
      }
    },
    payment_type_id: {
      type: DataTypes.CHAR(4),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "payment_type_id",
      references: {
        key: "payment_type_id",
        model: "payment_type_model"
      }
    },
    transaction_create_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "transaction_create_dt"
    },
    transaction_subtotal: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "transaction_subtotal"
    },
    transaction_discount: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "transaction_discount"
    },
    transaction_total: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "transaction_total"
    },
    transaction_paid: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "transaction_paid"
    },
    transaction_pay_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "transaction_pay_dt"
    },
    transaction_remark: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "transaction_remark"
    }
  };
  const options = {
    tableName: "transaction",
    comment: "",
    indexes: [{
      name: "payment_type_id",
      unique: false,
      type: "BTREE",
      fields: ["payment_type_id"]
    }, {
      name: "transaction_status_id",
      unique: false,
      type: "BTREE",
      fields: ["transaction_status_id"]
    }, {
      name: "member_id",
      unique: false,
      type: "BTREE",
      fields: ["member_id"]
    }, {
      name: "transaction_src_id",
      unique: false,
      type: "BTREE",
      fields: ["transaction_src_id"]
    }]
  };
  const TransactionModel = sequelize.define("transaction_model", attributes, options);
  return TransactionModel;
};