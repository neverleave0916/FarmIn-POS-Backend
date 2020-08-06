/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('renew_participate_product', {
    'renew_id': {
      type: DataTypes.CHAR(15),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'renew',
        key: 'renew_id'
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
    'renew_participate_product_amount': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'renew_participate_product'
  });
};
