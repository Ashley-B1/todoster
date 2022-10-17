import { Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcrypt';

// create new user
export const registerUser = async (req: Request, res: Response) => {
  try {
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email
    });

    const user = await newUser.save();
    res.status(200).json(user)
  } catch(e) {
    res.status(500).json(e);
  }
};

// login user
export const loginUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({
      username: req.body.username
    });
    !user && res.status(400).json('Wrong credentials!');

    if (!!user) {
      const validate = await bcrypt.compare(req.body.password, user.password);
      !validate && res.status(400).json('Wrong credentials!');

      const { password, ...others } = user._doc;
      res.status(200).json(others);
    }
  } catch(e) {
    res.status(500).json(e);
  }
};
