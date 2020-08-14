/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('news_participate_marketing_image', {
    'news_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'news',
        key: 'news_id'
      }
    },
    'marketing_image_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'marketing_image',
        key: 'marketing_image_id'
      }
    }
  }, {
    tableName: 'news_participate_marketing_image'
  });
};
