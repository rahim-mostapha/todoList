const router = require('express')();
const Task = require('./modle/task');
const jwtVerifying = require('../jwtVerify/verifying');

// add new Task shortcut
router.post('/new' , jwtVerifying.verify ,(req ,res) => {
    // set Task data
    let taskData = {name : req.body.name , description : req.body.description , owner : req.auth};
    if(typeof req.body.color !== 'undefined') taskData.color = req.body.color ;
    let task = new Task(taskData);
    //add Task into database
    task.save((err , data) => {
        // check the error is exist
        if(err){
            console.log(`token error : ${err}`);
            res.json({status : 'error' , error : "un-expected server error"});
        } 
        // return Task data
        else res.json({status : 'done' , data});
    });
});

// update Task
router.post('/update' , jwtVerifying.verify ,(req ,res) => {
    // Task data
    let taskDate = {
        name : req.body.name ,
        description : req.body.description 
    };
    if(typeof req.body.color !== 'undefined') taskDate.color = req.body.color ;
    //update task into database
    Task.findOneAndUpdate({_id : req.body._id , owner : req.auth} , taskDate ,(err , data) => {
        // check the error is exist
        if(err){
            console.log(`token error : ${err}`);
            res.json({status : 'error' , error : "un-expected server error"});
        } 
        // task update done
        else res.json({status : 'done'});
    });
});
// delete Task
router.delete('/delete/:_id' , jwtVerifying.verify ,(req ,res) => {
    //delete task from database
    Task.deleteOne({_id : req.params._id , owner : req.auth} ,(err , data) => {
        // check the error is exist
        if(err){
            console.log(`token error : ${err}`);
            res.json({status : 'error' , error : "un-expected server error"});
        } 
        // task delete successfuly
        else res.json({status : 'done'});
    });
});
// get all tasks
router.get('/list' , jwtVerifying.verify ,(req ,res) => {
    //get all tasks from database
    Task.find({owner : req.auth} , { owner : 0 } ,(err , data) => {
        // check the error is exist
        if(err){
            console.log(`token error : ${err}`);
            res.json({status : 'error' , error : "un-expected server error"});
        } 
        // get tasks successfuly
        else res.json({status : 'done' , data});
    });
});

module.exports = router;