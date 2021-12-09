require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

mongoose.connect(process.env.DATABASE_URL , {useNewUrlParser : true , useUnifiedTopology : true} , (error)=>{
    if(!error){
        const DB = mongoose.connection;
        
        // set public as static file
        app.use(express.static(path.join(__dirname , 'public')));
        //set cors for outside access
        app.use(cors());
        
        // set middelWares
        app.use(bodyParser.json({limit : '50mb' }));
        app.use(bodyParser.urlencoded({limit : '50mb' , extended : true}));
        console.log('connect');
        
        DB.on('error' , (error) => {
            console.error(`dataBase error ${error}`);
        });

        // DB.once('open' , () => {
        console.log('open');
            // set user controller 
            app.use('/api/user' , require('./user/controller'));
            
            // set task controller 
            app.use('/api/task' , require('./task/controller'));
            
            // view all
            app.get('*' , (req , res) => {
                res.sendFile(path.join(__dirname , 'public/index.html'));
            });
        
            app.listen(process.env.PORT , (err) =>{
                if(err) console.error(`listen error ${err} `);
                else console.info(`http://localhost:${process.env.PORT}`);
            })
        // });
    }
});
