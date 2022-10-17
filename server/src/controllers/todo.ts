import { Request, Response } from 'express';
import Todo from '../models/Todo';

// create new to-do
export const createTodo = async (req: Request, res: Response) => {
  const newTask = new Todo(req.body);

  try {
    const savedTask = await newTask.save();
    res.status(200).json(savedTask);
  } catch(e) {
    res.status(500).json({ err: e });
  }
};

// update to-do
export const updateTodo = async (req: Request, res: Response) => {
  try {
    const task = await Todo.findById(req.params.id);
    if (task?.userName === req.body.username) {
      try {
        const updatedTask = await Todo.findByIdAndUpdate(req.params.id, {
          $set: req.body
        }, {
          new: true,
        });
        res.status(200).json(updatedTask);
      } catch(e) {
        res.status(500).json({ err: e });
      }
    } else {
      res.status(401).json('You can only update your tasks, no one else\'s!')
    }
  } catch(e) {
    res.status(500).json({ err: e });
  }
};

// delete to-do
export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const task = await Todo.findById(req.params.id);
    if (!!task && task.userName === req.body.username) {
      try {
        await task.delete();
        res.status(200).json('Task has been deleted...')
      } catch(e) {
        res.status(500).json({ err: e });
      }
    } else {
      res.status(401).json('You can only delete your tasks!');
    }
  } catch(e) {
    res.status(500).json({ err: e });
  }
};

// get one to-do
export const getTodo = async (req: Request, res: Response) => {
  try {
    const task = await Todo.findById(req.params.id);
    res.status(200).json(task);
  } catch(e) {
    res.status(500).json({ err: e });
  }
};

// get all to-do's
export const getAllTodos = async (req: Request, res: Response) => {
  // console.log("I'm here in the controller statement")
  const userName = req.query.user;
  // console.log("Username -------------------------> ", userName);

  try {
    let tasks;
    if (userName) {
      tasks = await Todo.find({ userName });
    }
    res.status(200).json(tasks);
  } catch(e) {
    console.log("I'm in the catch statement!")
    res.status(500).json({ err: e });
  }
};
