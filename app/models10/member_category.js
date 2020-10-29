/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('member_category', {
    'member_category_id': {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'member_category_name': {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "null"
    },
    'member_category_desc': {
      type: DataTypes.STRING(256),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'member_category'
  });
};
