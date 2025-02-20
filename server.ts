import express, {Request, Response} from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from './src/routes/userRoutes';
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(express.json());
//cors allow access
app.use(cors());
//routes
app.use('/api/users', userRoutes);
app.use('/health-check', (req, res) => {
    res.send('The server is Healthy')
})
//Database connection
mongoose
    .connect(process.env.MONGODB_URI as string)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:' , err));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});