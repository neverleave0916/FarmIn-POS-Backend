/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('published_status', {
    'published_status_id': {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'published_status_title': {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "null"
    },
    'published_status_desc': {
      type: DataTypes.STRING(256),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'published_status'
  });
};
