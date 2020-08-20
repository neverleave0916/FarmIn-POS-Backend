/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cart_status', {
    'cart_status_id': {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'cart_status_name': {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "null"
    },
    'cart_status_desc': {
      type: DataTypes.STRING(256),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'cart_status'
  });
};
