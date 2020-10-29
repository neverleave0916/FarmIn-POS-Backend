/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_category', {
    'product_category_id': {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'product_category_name': {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "null"
    },
    'product_category_desc': {
      type: DataTypes.STRING(256),
      allowNull: true,
      comment: "null"
    },
    'product_category_img': {
      type: "LONGBLOB",
      allowNull: true,
      comment: "null"
    },
    'product_category_sort': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'product_category_parent': {
      type: DataTypes.CHAR(5),
      allowNull: true,
      comment: "null",
      references: {
        model: 'product_category',
        key: 'product_category_id'
      }
    },
    'deleted_at': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'product_category'
  });
};
