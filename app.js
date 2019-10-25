const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();


mongoose.connect(process.env.DATABASE_URL , {useNewUrlParser : true});

const DB = mongoose.connection;

// set public as static file
app.use(express.static(path.join(__dirname , 'public')));

// set middelWares
app.use(bodyParser.json({limit : '50mb' }));
app.use(bodyParser.urlencoded({limit : '50mb' , extended : true}));


DB.on('error' , (error) => {
    console.error(`dataBase error ${error}`);
});
DB.once('open' , () => {

    // set user controller 
    app.use('/user' , require('./user/controller'));
    
    // set user controller 
    app.use('/task' , require('./task/controller'));

    app.listen(process.env.PORT , (err) =>{
        if(err) console.error(`listen error ${err} `);
        else console.info(`http://localhost:${process.env.PORT}`);
    })
});