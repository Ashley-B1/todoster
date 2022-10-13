"use strict";
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "Task",
    {
      task: DataTypes.STRING,
      isComplete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      userId: DataTypes.INTEGER,
    },
    {}
  );

  Task.write = async ({ userId, task, isComplete }) => {
    const todo = await Task.create({
      userId,
      isComplete,
      task,
    });

    return await todo;
  };

  Task.associate = function (models) {
    // associations can be defined here
    Task.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Task;
};
