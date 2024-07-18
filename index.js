const express=require('express');
const cors=require('cors');
require('./ConfigFile');
const app=express();
const Task=require('./TaskListSchema');
app.use(cors());
// middleware function in Express.js is used to parse incoming requests with JSON payloads, it aslo convert the JSON data into js object 
app.use(express.json());


// get request to get the data from the data base 
app.get('/', async (req,resp)=>{
    const R=  await Task.find();

    // console.log(R)
    resp.send(R)

})
// post data into database 
app.post('/list',async (req,resp)=>{
    const List= new  Task(req.body);
    const SaveList= await  List.save();
    // console.log(SaveList);
    resp.send(SaveList);
})
// delete data 
app.delete('/list-del/:id',async (req,resp)=>{
    try{
         const Del=await Task.findByIdAndDelete(req.params.id);
         resp.send(Del);

    } catch(err){
        console.log("Error we are getting",err)
    }
})

app.listen(3100,console.log("Server is on"));