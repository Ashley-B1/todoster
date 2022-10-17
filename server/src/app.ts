import express, { Application, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app: Application = express();
app.use(express.json());
app.use(cors());

// import routes
import userRoute from './routes/userRoute'
import authRoute from './routes/authRoute'
import todoRoute from './routes/todosRoute';

// declare route paths
app.get("/", (req: Request, res: Response) => {
  res.send({ msg: "It works!!" });
});

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/todos', todoRoute);

export { app };
