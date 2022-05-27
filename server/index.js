import express from "express";
//import { bodyParser } from "body-parser";
import db from "mongoose";
import cors from "cors";

const app = express();
// app.use(
//     urlencoded({
//         extended: true,
//     })
// );

app.use(cors())
app.listen('5000', () => { console.log('listening to port 5000') })