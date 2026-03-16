const express=require('express');
const cors=require("cors");
const {task}=require("./data/task.json")
const taskRouter=require("./routes/task")
const server=express();
server.use(cors());
const PORT=8081;
server.use(express.json());

server.use("/task",taskRouter);
server.get('/',(req,res)=>{
    res.status(200).json({
        message:"home page:-)"
    });
})


server.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})