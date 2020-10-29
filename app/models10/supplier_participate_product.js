/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('supplier_participate_product', {
    'supplier_id': {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'supplier',
        key: 'supplier_id'
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
    'supplier_participate_product_amount': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'supplier_participate_product'
  });
};
