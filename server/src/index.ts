import { app } from './app';
import mongoose from 'mongoose';

const port: string | undefined = process.env.PORT;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
    console.log("Connected to db 🥳");
    app.listen(port, () => console.log(`Server listening 👂🏽 to port ${port}`));
  } catch(e) {
    console.log("Failed to connect to db 😒");
    console.log(e)
  }
};

startServer();
