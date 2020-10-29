/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_online_category', {
    'product_online_category_id': {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'product_online_category_title': {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "null"
    },
    'product_online_category_desc': {
      type: DataTypes.STRING(256),
      allowNull: true,
      comment: "null"
    },
    'product_online_category_img': {
      type: "LONGBLOB",
      allowNull: true,
      comment: "null"
    },
    'product_online_category_sort': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'product_online_category_parent': {
      type: DataTypes.CHAR(6),
      allowNull: true,
      comment: "null",
      references: {
        model: 'product_online_category',
        key: 'product_online_category_id'
      }
    },
    'deleted_at': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'product_online_category'
  });
};
