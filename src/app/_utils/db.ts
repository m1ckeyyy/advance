/*import mongoose from 'mongoose';

const uri = process.env.MONGO_URI;

if (!uri) throw new Error('Database environmental varaible is not defined');
mongoose.set('strictQuery', false);
mongoose
    .connect(uri)
    .then(() => console.log('Successfully connected to Mongo Database'))
    .catch((err) => console.log('Error occured while connecting to Mongo Database: ', err));
*/
import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI;

if (!uri) throw new Error('Database environmental varaible is not defined');

export async function connectToDatabase() {}
