const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    news_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "news_id",
      references: {
        key: "news_id",
        model: "news_model"
      }
    },
    marketing_image_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "marketing_image_id",
      references: {
        key: "marketing_image_id",
        model: "marketing_image_model"
      }
    }
  };
  const options = {
    tableName: "news_participate_marketing_image",
    comment: "",
    indexes: [{
      name: "marketing_image_id",
      unique: false,
      type: "BTREE",
      fields: ["marketing_image_id"]
    }]
  };
  const NewsParticipateMarketingImageModel = sequelize.define("news_participate_marketing_image_model", attributes, options);
  return NewsParticipateMarketingImageModel;
};