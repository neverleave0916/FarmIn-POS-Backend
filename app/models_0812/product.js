/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
    'product_id': {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'product_category_id': {
      type: DataTypes.CHAR(5),
      allowNull: false,
      comment: "null",
      references: {
        model: 'product_category',
        key: 'product_category_id'
      }
    },
    'published_status_id': {
      type: DataTypes.CHAR(3),
      allowNull: false,
      comment: "null",
      references: {
        model: 'published_status',
        key: 'published_status_id'
      }
    },
    'product_name': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'product_unit': {
      type: DataTypes.CHAR(5),
      allowNull: false,
      comment: "null"
    },
    'product_unit_price': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'product_inventory': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'product_desc': {
      type: DataTypes.STRING(256),
      allowNull: false,
      comment: "null"
    },
    'product_growth_period': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'product_expire': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'product_default_save_amount': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'product_actual_save_amount': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'product_online_unit': {
      type: DataTypes.CHAR(5),
      allowNull: false,
      comment: "null"
    },
    'product_online_unit_price': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'product_online_inventory': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'product_online_max_inventory': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'product'
  });
};
