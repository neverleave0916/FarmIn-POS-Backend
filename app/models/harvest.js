/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let harvest=sequelize.define('harvest', {
    'harvest_id': {
      type: DataTypes.CHAR(16),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'user_id': {
      type: DataTypes.CHAR(6),
      allowNull: true,
      comment: "null",
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    'harvest_dt': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'harvest'
  });



  // harvest.associate = function (db) {
  //   harvest.belongsToMany(db.product, {
  //     through: db.harvest_participate_product,
  //     foreignKey: "harvest_id",
  //   })
  // };
  return harvest;
};
