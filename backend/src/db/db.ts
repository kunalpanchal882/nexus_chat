import mongoose from "mongoose";

async function connectDb(): Promise<void>{
    try {
        await mongoose.connect(process.env.MONGO_URL as string)
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
}

export default connectDb