/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dispose', {
    'dispose_id': {
      type: DataTypes.CHAR(16),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'user_id': {
      type: DataTypes.CHAR(6),
      allowNull: true,
      comment: "null",
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    'dispose_dt': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'dispose'
  });
};
