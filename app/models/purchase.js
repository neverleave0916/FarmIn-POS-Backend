/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('purchase', {
    'purchase_id': {
      type: DataTypes.CHAR(16),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'user_id': {
      type: DataTypes.CHAR(6),
      allowNull: true,
      comment: "null",
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    'purchase_dt': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'purchase_subtotal': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'purchase_discount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'purchase_total': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'deleted_at': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'purchase'
  });
};
