/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    'user_id': {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'user_name': {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "null"
    },
    'user_account': {
      type: DataTypes.CHAR(30),
      allowNull: true,
      comment: "null"
    },
    'user_password': {
      type: DataTypes.STRING(256),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'user'
  });
};
