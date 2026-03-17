const taskModel=require('../models/task-model')

// This endpoint fetches all tasks from the database
// and sends them back in the response with a success status.
exports.getAllTasks=async(req,res)=>{
    const tasksData=await taskModel.find()
    res.status(200).json({
        success:true,
        data:tasksData
    })
}

// This endpoint finds one task using the id passed in req.params.
// If the task exists, it returns the task data; otherwise, it sends a 404 response.
exports.getSingleTaskById=async(req,res)=>{
    const {id}=req.params;
    const task=await taskModel.findById(id);
    if(!task){
        return res.status(404).json({
            success:false,
            message:`task not found for id :${id}`
        })
    }
    res.status(200).json({
        success:true,
        data:task
    })
}


// This endpoint updates a task using the id from req.params
// and the updated values sent inside req.body.data.
// If the task does not exist or no update data is provided, it returns a 404 response.
exports.updateTaskById=async(req,res)=>{
    const {id}=req.params;
    const {data}=req.body;
    const task=await taskModel.findById(id);
    if(!task ||Object.keys(data).length===0){
        return res.status(404).json({
            success:false,
            message:`task not found for id :${id}`
        })
    }
    const updateTask=await taskModel.findOneAndUpdate(
        {_id:id},
        data,
        {new:true}
    )
    res.status(200).json({
        success:true,
        message:"data updated successfully",
        data:updateTask
    })
}

// This endpoint deletes a task using the id from req.params.
// After deleting the task, it fetches the remaining tasks
// and returns the updated task list in the response.
exports.deleteTaskById=async(req,res)=>{
    const {id}=req.params;
    const data=await taskModel.findById(id);
    if(!data){
        return res.status(404).json({
            success:false,
            message:`task not found for id :${id}`
        })
    }
    await taskModel.findByIdAndDelete(id);
    const allTasks=await taskModel.find();
    res.status(200).json({
        success:true,
        message:"task deleted successfully",
        data:allTasks
    })
}

// This endpoint creates a new task using the data sent in req.body.data.
// If the input is empty, it returns an error response.
// After creating the task, it sends back the full updated task list.
exports.addNewTask=async(req,res)=>{
    const {data}=req.body;
    if(!data || Object.keys(data).length===0){
        return res.status(404).json({
            success:false,
            message:"Please enter all the details"
        })
    }
    await taskModel.create(data);
    const allTasks=await taskModel.find();
    res.status(200).json({
        success:true,
        message:"task added successfully",
        data:allTasks
    })
}

// This endpoint searches tasks by title using the search value from req.params.
// It performs a case-insensitive match and returns all matching tasks.
// If no task matches the search text, it sends a 404 response.
exports.searchTask=async(req,res)=>{
    const {search}=req.params;
        const tasksData=await taskModel.find({title:{$regex:search,$options:"i"}})
        if(tasksData.length===0){
            return res.status(404).json({
                success:false,
                message:`task not found for search :${search}`
            })
        }
    res.status(200).json({
        success:true,
        data:tasksData
    })
}

// This endpoint searches tasks by priority using the priority value from req.params.
// It performs a case-insensitive match and returns all matching tasks.
// If no task matches the given priority, it sends a 404 response.
exports.searchTaskByPriority=async(req,res)=>{
    const {priority}=req.params;
        const tasksData=await taskModel.find({priority:{$regex:priority,$options:"i"}})
        if(tasksData.length===0){
            return res.status(404).json({
                success:false,
                message:`task not found for search :${search}`
            })
        }
    res.status(200).json({
        success:true,
        data:tasksData
    })
}

// This endpoint searches tasks by status using the status value from req.params.
// It performs a case-insensitive match and returns all matching tasks.
// If no task matches the given status, it sends a 404 response.
exports.searchTaskByStatus=async(req,res)=>{
    const {status}=req.params;
        const tasksData=await taskModel.find({status:{$regex:status,$options:"i"}})
        if(tasksData.length===0){
            return res.status(404).json({
                success:false,
                message:`task not found for search :${search}`
            })
        }
    res.status(200).json({
        success:true,
        data:tasksData
    })
}
