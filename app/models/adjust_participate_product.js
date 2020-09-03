/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adjust_participate_product', {
    'adjust_id': {
      type: DataTypes.CHAR(16),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'adjust',
        key: 'adjust_id'
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
    'adjust_choice' : {
      type: DataTypes.CHAR(6),
      allowNull: true,
      comment: "null"
    },
    'adjust_participate_product_amount': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'adjust_participate_product'
  });
};
