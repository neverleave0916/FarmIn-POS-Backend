/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tutorials', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'title': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'description': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'published': {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      comment: "null"
    },
    'deleted_at': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'tutorials'
  });
};
