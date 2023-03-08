import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app.js';
import connectDB from './database/connection.js';
import log from './logger.js';

dotenv.config();

const port = process.env.PORT ?? 3000;
const mongoUrl = process.env.MONGO_URL ?? '';

mongoose.set('strictQuery', false);

app.listen(port, async () => {
  await connectDB(mongoUrl);
  log.info(`Server started in port ${port}`);
});
