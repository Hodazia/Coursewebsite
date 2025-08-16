// define the connection to DB
import  mongoose, {model, Schema } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDb =  async () => 
{
    try {
    const result = await mongoose.connect(process.env.MONGO_DB_URL as string);
    console.log("The DB is connected ");
    } catch (e) {
        console.error("Failed to connect to MongoDB:", e);
    }
}
