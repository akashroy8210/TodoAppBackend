const express = require('express')
const { task } = require("../data/task.json")

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        data: task
    })
})
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const taskData = task.find((each) => each.id === id);
    if (!taskData) {
        return res.status(404).json({
            success: false,
            message: `task not found for id :${id}`
        })
    }
    const index = task.findIndex((each) => each.id === id);
    task.splice(index, 1);
    res.status(200).json({
        success: true,
        message: "task deleted successfully",
        data: task
    })
})
router.post("/", (req, res) => {
    const { title, description, status, priority } = req.body;
    if (!title || !description || !status || !priority) {
        return res.status(400).json({
            success: false,
            message: "All field are required"
        })
    }
    const id = Date.now()
    task.push({
        id,
        title,
        description,
        status,
        priority
    })
    res.status(201).json({
        success: true,
        message: "task created successfully",
        data: task
    })
})
router.get('/status/:status', (req, res) => {
    const { status } = req.params;
    const taskData = task.filter((each) => each.status === status);
    if (taskData.length === 0) {
        return res.status(404).json({
            success: false,
            message: `task not found for status :${status}`
        })
    }
    res.status(200).json({
        success: true,
        data: taskData
    })
})
router.get('/priority/:priority', (req, res) => {
    const { priority } = req.params;
    const taskData = task.filter((each) => each.priority === priority)
    if (taskData.length===0) {
        returnres.status(404).json({
            success: false,
            message: `task not found for priority :${priority}`
        })
    }
    res.status(200).json({
        success: true,
        data: taskData
    })
})
router.get("/:id", (req, res) => {
    const { id } = req.params;
    const taskData = task.find((each) => each.id === id);
    if (!taskData) {
        return res.status(404).json({
            success: false,
            message: `task not found for id :${id}`
        })
    }
    res.status(200).json({
        success: true,
        data: taskData
    })
})
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, status, priority } = req.body;
    const taskData = task.find((each) => each.id === id)
    if (!taskData) {
        returnres.status(400).json({
            success: false,
            message: `task not found for id :${id}`
        })
    }
    taskData.title = title;
    taskData.description = description;
    taskData.status = status;
    taskData.priority = priority;
    const updateTask = task

    res.status(200).json({
        success: true,
        message: "data updated successfully",
        data: updateTask
    })
})
router.get('/search/:search',(req,res)=>{
    const {search}=req.params;
    const taskData=task.filter((each)=>each.title.toLowerCase().includes(search.toLowerCase()))
    if(taskData.length===0){
        return res.status(404).json({
            success:false,
            message:`task not found for search :${search}`
        })
    }
    res.status(200).json({
        success:true,
        data:taskData
    })
})

module.exports = router;