"use strict";

const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "mike.w@monstersinc.io",
          username: "big-mike",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "james.sullivan@mu.edu",
          username: "bookitty",
          hashedPassword: bcrypt.hashSync("password2"),
        },

        {
          email: "randall.b@mu.edu",
          username: "camogator",
          hashedPassword: bcrypt.hashSync("password3"),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;

    return queryInterface.bulkDelete(
      "Users",
      {
        username: { [Op.in]: ["big-mike", "bookitty", "camogator"] },
      },
      {}
    );
  },
};
