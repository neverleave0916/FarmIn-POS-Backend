/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sensor', {
    'sensor_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'temperature': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'humidity': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'water_level': {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      comment: "null"
    },
    'Illuminance': {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      comment: "null"
    },
    'soil_moisture': {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      comment: "null"
    },
    'deleted_at': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'sensor'
  });
};
