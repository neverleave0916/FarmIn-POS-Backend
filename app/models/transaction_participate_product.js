/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaction_participate_product', {
    'transaction_id': {
      type: DataTypes.CHAR(15),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'transaction',
        key: 'transaction_id'
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
    'transaction_participate_product_unit': {
      type: DataTypes.CHAR(5),
      allowNull: false,
      comment: "null"
    },
    'transaction_participate_product_amount': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'transaction_participate_product_unit_price': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'transaction_participate_product'
  });
};
