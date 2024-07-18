const mongoose=require('mongoose');

const ListSc= new mongoose.Schema({
    input:String
},{collection:"TaskList"});

module.exports=mongoose.model('TaskList',ListSc);