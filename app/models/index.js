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
  operatorsAliases: 0,

  logQueryParameters: true,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  define:{
    //https://sequelize.org/v5/manual/models-definition.html#configuration
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: 'deleted_at',
    paranoid:true
  },
  dialectOptions: {
    useUTC: false, //for reading from database
    dateStrings: true,
    typeCast: true,
    timezone: 'Etc/GMT+8'
  },
  syncOnAssociation: false,
  timezone: '+08:00' //for writing to database
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
  */
  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  //採收
  db.harvest.belongsToMany(db.product, {
    through: db.harvest_participate_product,
    foreignKey: "harvest_id",
  });
  db.product.belongsToMany(db.harvest, {
    through: db.harvest_participate_product,
    foreignKey: "product_id",
  });

  //進貨
  db.purchase.belongsToMany(db.product, {
    through: db.purchase_participate_product,
    foreignKey: "purchase_id",
  });
  db.product.belongsToMany(db.purchase, {
    through: db.purchase_participate_product,
    foreignKey: "product_id",
  });

  //報廢
  db.dispose.belongsToMany(db.product, {
    through: db.dispose_participate_product,
    foreignKey: "dispose_id",
  });
  db.product.belongsToMany(db.dispose, {
    through: db.dispose_participate_product,
    foreignKey: "product_id",
  });

  //調整
  db.adjust.belongsToMany(db.product, {
    through: db.adjust_participate_product,
    foreignKey: "adjust_id",
  });
  db.product.belongsToMany(db.adjust, {
    through: db.adjust_participate_product,
    foreignKey: "product_id",
  });

  //交易
  db.transaction.belongsTo(db.transaction_src,{
    through: db.transaction_src,
    foreignKey: "transaction_src_id"
  });
  db.transaction.belongsTo(db.transaction_status,{
    through: db.transaction_status,
    foreignKey: "transaction_status_id"
  });
  db.transaction.belongsTo(db.member,{
    through: db.member,
    foreignKey: "member_id"
  });
  db.transaction.belongsTo(db.payment_type,{
    through: db.payment_type,
    foreignKey: "payment_type_id"
  });
  db.transaction.belongsToMany(db.product, {
    through: db.transaction_participate_product,
    foreignKey: "transaction_id",
  });
  db.product.belongsToMany(db.transaction, {
    through: db.transaction_participate_product,
    foreignKey: "product_id",
  });



    //採收
    db.supplier.belongsToMany(db.product, {
      through: db.supplier_participate_product,
      foreignKey: "supplier_id",
    });
    db.product.belongsToMany(db.supplier, {
      through: db.supplier_participate_product,
      foreignKey: "product_id",
    });

    db.member.belongsToMany(db.member_category, {
      through: db.member_participate_member_category,
      foreignKey: "member_id",
    });
    db.member_category.belongsToMany(db.member, {
      through: db.member_participate_member_category,
      foreignKey: "member_category_id",
    });


  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
module.exports = db;
