
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
//const env = process.env.NODE_ENV || 'development';


const db = {};
const dbConfig = require("../config/db.config.js");
//const { Sequelize, DataTypes } = require('sequelize');
//const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  logQueryParameters: true,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});




/** sequelize用來定義資料表sequelize.define
 *  Sequelize是模組，傳入它就不用再require一次了 */
//db.tutorials = require("./tutorial.model.js")(sequelize, DataTypes); 
//db.product = require("./product")(sequelize, Sequelize.DataTypes);






fs
  .readdirSync(__dirname)
  .filter(file => {
    //indexOf() 方法可返回某個指定的字符串值在字符串中首次出現的位置
    //basename目前的檔案名稱
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });
  /** 類陣列物件-隨機下標
      var anObj = { 100: 'a', 2: 'b', 7: 'c' };
      console.log(Object.keys(anObj)); // console: ['2', '7', '100']
  
  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });*/





  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
module.exports = db;
