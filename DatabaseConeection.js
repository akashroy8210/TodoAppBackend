const mongoose=require("mongoose")

function connectionDB(){
    const DB_URL=process.env.MONGO_URL

    mongoose.connect(DB_URL)
    const db=mongoose.connection;
    db.on("error",console.error.bind(console,"connection error"))
    db.once("open",()=>{
        console.log("Database connected successfully...")
    })
}

module.exports=connectionDB