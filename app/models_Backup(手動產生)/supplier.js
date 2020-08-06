module.exports = (sequelize, Sequelize) => {
  const Supplier = sequelize.define("supplier", {
    "supplier_id": {
      type: Sequelize.CHAR(5),
      primaryKey: true
    },
    "supplier_name": {
      type: Sequelize.STRING(50),
    },
    "supplier_phone": {
      type: Sequelize.CHAR(15),
    },
    "supplier_address": {
      type: Sequelize.STRING(100),
    },
    "supplier_disc": {
      type: Sequelize.STRING(256),
    }
  });

  return Supplier;
};