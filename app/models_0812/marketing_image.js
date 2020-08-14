/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('marketing_image', {
    'marketing_image_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'marketing_image_desc': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'marketing_image_data': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'marketing_image_create_datetime': {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'marketing_image'
  });
};
