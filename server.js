import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import router from './Routes/Blogs.js';

dotenv.config();

const app = express();
app.use(express.json());

// Establish MongoDB connection before starting the server
connectDB();

// Add a prefix for your API routes
app.use("/", router);

// Fallback for port if not set in .env
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// Root route (home page)
app.get("/", (req, res) => {
    res.send("<h1>Home</h1>");
});
