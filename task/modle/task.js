const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const taskSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true , 'taskname is required field']
    },
    description : {
        type : String,
        required : [true , 'description is required field']
    },
    color : {
        type : String,
        default : '#505050'
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : [true , 'owner is required property']
    }
});

let Task = module.exports = mongoose.model("Task" , taskSchema);
