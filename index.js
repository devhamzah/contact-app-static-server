import express from "express";
import dotenv from "dotenv";
import path from 'path';
import mongoose from "mongoose";
import contactRoute from "./routes/contact.js"

const __dirname = path.resolve();
dotenv.config();
let port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use('/',express.static(path.join(__dirname,'frontend','build')))
app.use('/contact',contactRoute);


mongoose.connect(process.env.URL,{
    useNewUrlParser:true,useUnifiedTopology:true
}).then(()=>{
    app.listen(port,()=> console.log(`server on listening from ${port}`))
}).catch((err)=> console.log(err));