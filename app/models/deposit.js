/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('deposit', {
    'deposit_id': {
      type: DataTypes.CHAR(15),
      allowNull: false,
      comment: "null"
    },
    'member_id': {
      type: DataTypes.CHAR(6),
      allowNull: false,
      comment: "null",
      references: {
        model: 'member',
        key: 'member_id'
      }
    },
    'deposit_amount': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'deposit_time': {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true,
      comment: "null"
    }
  }, {
    tableName: 'deposit'
  });
};
