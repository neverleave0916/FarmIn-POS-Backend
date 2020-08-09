/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('member_participate_member_category', {
    'member_id': {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'member',
        key: 'member_id'
      }
    },
    'member_category_id': {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'member_category',
        key: 'member_category_id'
      }
    }
  }, {
    tableName: 'member_participate_member_category'
  });
};
