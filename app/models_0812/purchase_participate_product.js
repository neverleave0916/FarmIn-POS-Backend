/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('purchase_participate_product', {
    'purchase_id': {
      type: DataTypes.CHAR(16),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'purchase',
        key: 'purchase_id'
      }
    },
    'product_id': {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'product',
        key: 'product_id'
      }
    },
    'purchase': {
      type: DataTypes.CHAR(5),
      allowNull: false,
      comment: "null"
    },
    'purchase_participate_product_amount': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'purchase_participate_product_unit_price': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'purchase_participate_product'
  });
};
