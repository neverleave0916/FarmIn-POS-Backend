const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    supplier_id: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "supplier_id"
    },
    supplier_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "supplier_name"
    },
    supplier_phone: {
      type: DataTypes.CHAR(15),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "supplier_phone"
    },
    supplier_address: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "supplier_address"
    },
    supplier_desc: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "supplier_desc"
    }
  };
  const options = {
    tableName: "supplier",
    comment: "",
    indexes: []
  };
  const SupplierModel = sequelize.define("supplier_model", attributes, options);
  return SupplierModel;
};