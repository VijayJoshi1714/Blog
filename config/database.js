import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.URL;

const connectdb = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully!");
    } catch (error) {
        console.error("Database connection error:", error.message);
        process.exit(1); // Exit the process with failure if connection fails
    }
}

export default connectdb;
