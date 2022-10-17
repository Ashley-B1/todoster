import mongoose, { Schema, model } from 'mongoose';

export interface UserResult<T> extends mongoose.Document {
  _doc: T;
}

export interface User extends UserResult<User> {
  username: string;
  email: string;
  password: string;
};

const UserSchema = new Schema<User>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

export default model<User>('User', UserSchema);
