/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dispose_participate_product', {
    'dispose_id': {
      type: DataTypes.CHAR(16),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'dispose',
        key: 'dispose_id'
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
    'dispose_participate_product_amount': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'deleted_at': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'dispose_participate_product'
  });
};
