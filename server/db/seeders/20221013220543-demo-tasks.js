"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Tasks",

      [
        {
          task: "Train Sully to scare the pants off of kids.",
          userId: 1,
          isComplete: true,
        },
        {
          task: "Become the number 1 scarer no matter the costs.",
          userId: 3,
          isComplete: false,
        },
        {
          task: "Try to find Boo's room because I miss her.",
          userId: 2,
          isComplete: false,
        },
        {
          task: "Take Celia out on a date so won't be mad.",
          userId: 1,
          isComplete: false,
        },
        {
          task: "Fill out the paperwork Roz gave me.",
          userId: 1,
          isComplete: false,
        },
        {
          task: "Hit all my numbers before the end of the day.",
          userId: 2,
          isComplete: true,
        },
        {
          task: "Get more kids for the experiment with Waternoose.",
          userId: 3,
          isComplete: true,
        },
        {
          task: "Go a day without Mike yelling at me.",
          userId: 2,
          isComplete: false,
        },
        {
          task: "Avoid Randall because he gives me the creeps.",
          userId: 1,
          isComplete: true,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tasks", null, {});
  },
};
