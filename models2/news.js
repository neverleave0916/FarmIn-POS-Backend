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
      autoIncrement: true,
      comment: null,
      field: "news_id"
    },
    news_artical: {
      type: DataTypes.STRING(10000),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "news_artical"
    },
    news_update_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "news_update_dt"
    }
  };
  const options = {
    tableName: "news",
    comment: "",
    indexes: []
  };
  const NewsModel = sequelize.define("news_model", attributes, options);
  return NewsModel;
};