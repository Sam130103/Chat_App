const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const userRoute=require('./routes/userRoute');
const app=express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api/auth",userRoute)
mongoose.connect(process.env.MONGOOSE_URL,{
    useNewurlParser:true,
    useUnifiedTopology:true,

}).then(()=>{
    console.log("mongoose connected");
}).catch(()=>{
    console.log(err.messsage);
});  
const server=app.listen(process.env.PORT,()=>{
    console.log("SERVER STARTED!!");
})