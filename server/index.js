import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import route from "./routes/userRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();


const URL = process.env.MONGOURL ;
const PORT =   process.env.PORT || 3000 ; 

mongoose.connect(URL).then(() => {
    console.log("DB connected successfully");
  
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  }).catch(error => console.log(error));

  app.use("/api", route);
  