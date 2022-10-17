import { Request, Response } from 'express';
import User from '../models/User';
import Todo from '../models/Todo';
import bcrypt from 'bcrypt';

// get all users (DEV TESTING !PRODUCTION)
// export const getAllUsers = async (req: Request, res: Response) => {
//   const users = await User.find();
//   try {
//     return res.status(200).json(users);
//   } catch(e) {
//     console.log('I\'m in the catch statement')
//     return res.status(500).json({ err: e });
//   }
// };

// update user
export const updateUser = async (req: Request, res: Response) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      }, { new: true });

      res.status(200).json(updatedUser)
    } catch(e) {
      res.status(401).json('You can only update your account!')
    }
  }
};


// get user
export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!!user) {
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    }
  } catch(e) {
    res.status(500).json(e);
  }
};

// delete user
export const deleteUser = async (req: Request, res: Response) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id)
      try {
        await Todo.deleteMany({
          userName: user?.username
        })
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User has been deleted...');
      } catch(e) {
        res.status(500).json(e)
      }
    } catch(e) {
      res.status(404).json('User not found!');
    }
  } else {
    res.status(401).json('Don\'t be trying to delete other folks account! That\'s rude 😤')
  }
};
