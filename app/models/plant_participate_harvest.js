/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plant_participate_harvest', {
    'plant_id': {
      type: DataTypes.CHAR(16),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'plant',
        key: 'plant_id'
      }
    },
    'harvest_id': {
      type: DataTypes.CHAR(16),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'harvest',
        key: 'harvest_id'
      }
    }
  }, {
    tableName: 'plant_participate_harvest'
  });
};
