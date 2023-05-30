import express from "express";

import dbConnection from "./db.js";
dbConnection()

import dotenv from 'dotenv'
dotenv.config()

import cors from 'cors'

import routeFunction from "./routers/route.js";

const app = express();
app.use(cors())
app.use(express.json());

routeFunction(app)

const port = process.env.PORT;

app.listen(port, ()=> console.log(`listening at port ${port}`))