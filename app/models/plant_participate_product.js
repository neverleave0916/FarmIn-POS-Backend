/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plant_participate_product', {
    'plant_id': {
      type: DataTypes.CHAR(16),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'plant',
        key: 'plant_id'
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
    'plant_participate_product_amount': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'plant_participate_product'
  });
};
