/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaction_status', {
    'transaction_status_id': {
      type: DataTypes.CHAR(7),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'transaction_status_name': {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "null"
    },
    'transaction_status_desc': {
      type: DataTypes.STRING(256),
      allowNull: true,
      comment: "null"
    },
    'deleted_at': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'transaction_status'
  });
};
