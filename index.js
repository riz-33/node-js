import express from "express";
import user from './routes/index.js';
import mongoose from "./db/index.js";

mongoose.connection.on("open", () => {
    console.log("Database Connected")
})

// mongoose.connection.on("error", (err) => {
//     console.log("Database Error", err)
// })

const app = express();
app.use(express.json());
app.use("/api", user)

app.get("/", (req, res) => {
    res.send(new Date().toString())
})

app.listen(3000, () => {
    console.log('server is running')
})

// app.use("/", (req, res, next) => {
//     return res.send()
//     console.log("Request---->", req.originalUrl)
//     next()
// })