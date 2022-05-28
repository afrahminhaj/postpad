import express from "express";
import bodyParser from "body-parser";
import db from "mongoose";
import cors from "cors";

import postRoutes from './routes/posts.js'

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(cors());

const PORT = process.env.PORT || 5000;

db
    .connect("mongodb://localhost:27017/postsdb")
    .then(() => {
        app.listen(PORT, () => {
            console.log("listening to port: " + PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    });

app.use('/posts', postRoutes)