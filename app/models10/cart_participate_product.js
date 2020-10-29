/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cart_participate_product', {
    'member_id': {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'cart',
        key: 'member_id'
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
    }
  }, {
    tableName: 'cart_participate_product'
  });
};
