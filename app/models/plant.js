/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plant', {
    'plant_id': {
      type: DataTypes.CHAR(16),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'user_id': {
      type: DataTypes.CHAR(6),
      allowNull: false,
      comment: "null",
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    'plant_datetime': {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'plant'
  });
};
