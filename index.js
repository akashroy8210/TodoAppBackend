const express=require('express');
const cors=require("cors");
const dotenv=require("dotenv").config()
const {task}=require("./data/task.json")
const taskRouter=require("./routes/task")
const server=express();
const connectionDB=require("./DatabaseConeection")
server.use(cors());
const PORT=8000;
server.use(express.json());
connectionDB();
server.use("/tasks",taskRouter);
server.get('/',(req,res)=>{
    res.status(200).json({
        message:"home page:-)"
    });
})


server.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})