const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    published_status_id: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "published_status_id"
    },
    published_status_title: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "published_status_title"
    },
    published_status_desc: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "published_status_desc"
    }
  };
  const options = {
    tableName: "published_status",
    comment: "",
    indexes: []
  };
  const PublishedStatusModel = sequelize.define("published_status_model", attributes, options);
  return PublishedStatusModel;
};