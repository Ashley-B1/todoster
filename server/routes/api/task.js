const express = require('express');
const asyncHandler = require('express-async-handler');

const { Task } = require('../../db/models');
const { restoreUser } = require('../../utils/auth');
const { check } = require('express-validator');

const router = express.Router();

const validateTodo = [
  check('task')
    .exists({ checkFalsy: true })
    .withMessage('Task can not be empty!'),
  check('userId')
  .exists({ checkFalsy: true })
  .withMessage('Please make sure you are logged in'),
];

// READ specific task under an ID
router.get(
  '/:id',
  restoreUser,
  asyncHandler(async (req, res) => {
    const todoId = req.params.id;

    const todo = await Task.findOne({
      where: {
        id: `${todoId}`
      }
    });

    return res.json(todo);
  })
);

// CREATE a new todo
router.post(
  '/',
  restoreUser,
  validateTodo,
  asyncHandler(async (req, res) => {
    const {
      userId,
      task,
      isComplete
    } = req.body;

    const todo = await Task.write({
      userId,
      task,
      isComplete
    });

    return res.json(todo);
  })
);

// UPDATE a todo
router.put(
  '/:id',
  restoreUser,
  asyncHandler(async (req,res) => {
    const todoId = req.params.id;

    const {
      task,
      isComplete
    } = req.body;

    const todo = await Task.findByPk(todoId);

    todo.update({
      isComplete,
      task
    });

    return res.json(todo);
  })
);

// DELETE a todo
router.delete(
  '/:id',
  restoreUser,
  asyncHandler(async (req, res) => {
    const todoId = req.params.id;

    const todo = await Task.findByPk(todoId);

    await todo.destroy();

    return res.json({ todoId: todo.id });
  })
);

module.exports = router;
