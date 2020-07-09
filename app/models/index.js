const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
/** sequelize用來定義資料表sequelize.define
 *  Sequelize是模組，傳入它就不用再require一次了 */
db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize); 
db.product = require("./product")(sequelize, Sequelize);
module.exports = db;
