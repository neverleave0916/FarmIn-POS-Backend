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
      allowNull: false,
      comment: "null"
    },
    'product_category_desc': {
      type: DataTypes.STRING(256),
      allowNull: false,
      comment: "null"
    },
    'product_category_img': {
      type: "LONGBLOB",
      allowNull: false,
      comment: "null"
    },
    'product_category_sort': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
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
    }
  }, {
    tableName: 'product_category'
  });
};
