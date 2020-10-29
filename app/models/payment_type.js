/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_type', {
    'payment_type_id': {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'payment_type_title': {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "null"
    },
    'payment_type_desc': {
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
    tableName: 'payment_type'
  });
};
