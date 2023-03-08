import mongoose from 'mongoose';
import log from '../logger';

const connectDB = (urlBD: string) =>
  new Promise((resolve, reject) => {
    mongoose.connect(urlBD, error => {
      if (error) {
        reject(new Error('Error connecting to database'));
      }

      log.debug('¡Database successfully connected!');
      resolve(true);
    });
  });

export default connectDB;
