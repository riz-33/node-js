import express from "express";
import user from './routes/index.js';
import mongoose from "./db/index.js";
// import { userSchema } from "./schema/index.js";

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

// let users = [];

// app.post("/users", async (req, res) => {
//     try {
//         await userSchema.validateAsync(req.body);
//         users.push({ ...req.body, id: Date.now().toString(36) })
//         res.send({ user: req.body, message: "User Added Successfully" })
//     } catch (err) {
//         res.send({ error: err.details || "Something went wrong" })
//     }
// })

// app.get("/users", (req, res) => {
//     res.send(users)
// })

// app.delete("/users/:id", (req, res) => {
//     const { id } = req.params;
//     users = users.filter(obj => obj.id !== id)
//     res.send({ message: "User Deleted Successfully" })
// })

// app.put("/users/:id", (req, res) => {
//     const { id } = req.params;
//     const index = users.findIndex(obj => obj.id === id)
//     users.splice(index, 1, { ...req.body, id })
//     res.send({ message: "User Updated Sucessfully" })
// })