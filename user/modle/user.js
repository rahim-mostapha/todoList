const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = mongoose.Schema({
    fullname : {
        type : String,
        required : [true , 'fullname is required field']
    },
    email : {
        type : String,
        required : [true , 'email is required field'],
        unique : true,
        validate : {
            validator : (val) =>  /[a-zA-z0-9_\-\.]+\@[a-zA-z0-9_\-]{3,6}\.[a-zA-z]{3,5}/.test(val) ,
            message : (props) => `${props.value} is not valid email`
        }
    },
    password : {
        type : String,
        required : [true , 'password is required field'],
        validate : {
            validator : (val) => /[a-zA-Z0-9_\-\.\#\$\^\*\!]{6,25}/.test(val) ,
            message : (props) => `${props.value} is not valid password`
        }
    }, 
    date : {
        type : Date,
        default : Date.now()
    }
});

userSchema.pre('save' , function (next) {
    if(!this.isModified('password')) return next();

    bcrypt.genSalt(10 , (err , salt) => {
        if(err) next(err);
        bcrypt.hash(this.password , salt , (error , hash) => {
            if(error) next(error);
            this.password = hash;
            next();
        })
    });
});

userSchema.methods.comparePassword = function (pass , hashPass , cb) {
    bcrypt.compare(pass , hashPass , (err, res) => {
        if(res) cb(null , true);
        else cb(true , false);
    })
}


let User = module.exports = mongoose.model("User" , userSchema);
