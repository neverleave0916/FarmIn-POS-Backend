/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('farm_info', {
    'farm_info_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'farm_info_inage': {
      type: "LONGBLOB",
      allowNull: true,
      comment: "null"
    },
    'farm_info_desc': {
      type: DataTypes.STRING(1000),
      allowNull: true,
      comment: "null"
    },
    'farm_info_update_dt': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'farm_info'
  });
};
