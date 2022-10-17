import { Schema, model } from 'mongoose';

export interface Todo {
  userName: string;
  task: string;
  isComplete: boolean;
  date: Date;
};

const TodoSchema = new Schema<Todo>({
  userName: { type: String, required: true },
  task: { type: String, required: true },
  isComplete: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
});

export default model<Todo>('Todo', TodoSchema);
