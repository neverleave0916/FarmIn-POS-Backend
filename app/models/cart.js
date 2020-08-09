/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cart', {
    'member_id': {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'member',
        key: 'member_id'
      }
    },
    'cart_status_id': {
      type: DataTypes.CHAR(4),
      allowNull: false,
      comment: "null",
      references: {
        model: 'cart_status',
        key: 'cart_status_id'
      }
    },
    'cart_update_datetime': {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'cart'
  });
};
