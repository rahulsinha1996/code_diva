const express = require("express");
const  authRouter  = require("./routes/auth")
const connection = require("./storage/db")
const userRouter = require("./routes/user")
const taskRouter = require("./routes/task")
const cors = require("cors");
require("dotenv").config()
const port = process.env.PORT

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/auth", authRouter)
app.use("/user", taskRouter)
app.use("/profile", userRouter)


app.get("/show", (req,res)=>{
    res.send("This is workspace")
})
app.listen(port, async ()=>{
    await connection;
    console.log("connected to db")
    console.log("Server got started")
})
