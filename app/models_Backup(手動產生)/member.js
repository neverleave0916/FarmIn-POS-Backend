module.exports = (sequelize, Sequelize) => {
    const Member = sequelize.define("member", {
      "member_id": {
        type: Sequelize.CHAR(6),
        primaryKey: true
      },
      "member_card_id": {
        type: Sequelize.CHAR(10),
      },
      "member_name": {
        type: Sequelize.STRING(30),
      },
      "member_gender": {
        type: Sequelize.TINYINT(1),
      },
      "member_birthday": {
        type: Sequelize.DATE,
      },
      "member_phone": {
        type: Sequelize.CHAR(15),
      },
      "member_email": {
        type: Sequelize.STRING(100),
      },
      "member_address": {
        type: Sequelize.STRING(100),
      },
      "member_balance": {
        type: Sequelize.FLOAT(),
      },
      "member_remark": {
        type: Sequelize.STRING(256)
      }
    });

    return Member;
  };