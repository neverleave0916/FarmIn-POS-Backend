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
      allowNull: true,
      comment: "null",
      references: {
        model: 'cart_status',
        key: 'cart_status_id'
      }
    },
    'cart_update_dt': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'deleted_at': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'cart'
  });
};
