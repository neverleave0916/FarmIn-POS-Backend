/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('member', {
    'member_id': {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'member_card_id': {
      type: DataTypes.CHAR(10),
      allowNull: false,
      comment: "null",
      unique: true
    },
    'member_name': {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "null"
    },
    'member_gender': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      comment: "null"
    },
    'member_birthday': {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "null"
    },
    'member_phone': {
      type: DataTypes.CHAR(15),
      allowNull: false,
      comment: "null"
    },
    'memebr_email': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'member_address': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'member_balance': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'member_remark': {
      type: DataTypes.STRING(256),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'member'
  });
};
