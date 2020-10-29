/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('deposit', {
    'deposit_id': {
      type: DataTypes.CHAR(15),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'member_id': {
      type: DataTypes.CHAR(6),
      allowNull: true,
      comment: "null",
      references: {
        model: 'member',
        key: 'member_id'
      }
    },
    'deposit_amount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'deposit_dt': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'deposit'
  });
};
