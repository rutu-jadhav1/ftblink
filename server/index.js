import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import { postLink, getRedirected } from './controllers/link.js';


const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    if(conn){
        console.log(`✅ MongoDB Connected Successfully 📦`)
    }
}
connectDB();

app.get("/health", (req,res)=>{
    res.json({
        success : true,
        message : "FTP Link Web"
    })
})

app.post("/link", postLink);

app.get("/:slug", getRedirected);


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})