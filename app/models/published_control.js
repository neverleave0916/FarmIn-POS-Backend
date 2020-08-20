/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('published_control', {
    'published_control_id': {
      type: DataTypes.CHAR(8),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'member_category_id': {
      type: DataTypes.CHAR(5),
      allowNull: false,
      comment: "null",
      references: {
        model: 'member_category',
        key: 'member_category_id'
      }
    },
    'product_id': {
      type: DataTypes.CHAR(6),
      allowNull: false,
      comment: "null",
      references: {
        model: 'product',
        key: 'product_id'
      }
    },
    'published_control_save_amount': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'published_control'
  });
};
