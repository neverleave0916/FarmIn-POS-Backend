/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaction', {
    'transaction_id': {
      type: DataTypes.CHAR(15),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'member_id': {
      type: DataTypes.CHAR(6),
      allowNull: true,
      comment: "null",
      references: {
        model: 'member',
        key: 'member_id'
      }
    },
    'transaction_src_id': {
      type: DataTypes.CHAR(6),
      allowNull: true,
      comment: "null",
      references: {
        model: 'transaction_src',
        key: 'transaction_src_id'
      }
    },
    'transaction_status_id': {
      type: DataTypes.CHAR(7),
      allowNull: true,
      comment: "null",
      references: {
        model: 'transaction_status',
        key: 'transaction_status_id'
      }
    },
    'payment_type_id': {
      type: DataTypes.CHAR(4),
      allowNull: true,
      comment: "null",
      references: {
        model: 'payment_type',
        key: 'payment_type_id'
      }
    },
    'transaction_create_dt': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'transaction_subtotal': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'transaction_discount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'transaction_total': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'transaction_paid': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'transaction_pay_dt': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'transaction_remark': {
      type: DataTypes.STRING(256),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'transaction'
  });
};
