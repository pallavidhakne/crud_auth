import express from "express";
//import dotenv from 'dotenv';
import mongoose from 'mongoose'
//dotenv.config();
//connect database
mongoose
  .connect("mongodb+srv://pallavi:pallavi@crudauth.cqigqcr.mongodb.net/")
 
 .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();

//const PORT = process.env.PORT || 3000;
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});