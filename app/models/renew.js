/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('renew', {
    'renew_id': {
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
    'transaction_id': {
      type: DataTypes.CHAR(15),
      allowNull: true,
      comment: "null",
      references: {
        model: 'transaction',
        key: 'transaction_id'
      }
    },
    'renew_start_dt': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'renew_end_dt': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'renew_cycle': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'renew'
  });
};
