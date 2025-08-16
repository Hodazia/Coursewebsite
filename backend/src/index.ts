import dotenv from "dotenv";
dotenv.config();

import express from "express"
import { connectDb } from "./utils/db.js";
import  { Authrouter  } from "./routes/authroute.js";
const app =express();
app.use(express.json());


app.get("/",(req,res) => {
    res.status(200).json({
        "message":"AA gaye tum"
    })
});

app.use("/api/v1/user", Authrouter);
app.listen(3000, () => {
    connectDb();
    console.log("Connected to the port, aa gaye tum LOL");
})