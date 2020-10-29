/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('supplier', {
    'supplier_id': {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'supplier_name': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'supplier_phone': {
      type: DataTypes.CHAR(15),
      allowNull: true,
      comment: "null"
    },
    'supplier_address': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'supplier_desc': {
      type: DataTypes.STRING(256),
      allowNull: true,
      comment: "null"
    },
    'deleted_at': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'supplier'
  });
};
