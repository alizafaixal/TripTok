let express = require('express');
let router = express.Router();
let User = require('../model/users.model').User;

router.post('/login', async(req,res) =>{
    let email =  req.body.email;
    let password = req.body.password;

    let users = await User.find().where({email: email}).where({password: password});
    if(users.length >0){
        res.send('Logged In');
    }else{
        res.send('User doesnt exist, please register');
    }

});

router.post('/register', async(req,res) =>{
    let email= req.body.email;
    let password = req.body.password;

    let users = await User.find().where({email: email});

    if(users.length ===0 ){
        let newUser = new User({
            email: email,
            password: password
        });
        await newUser.save();
        res.send('User registered');
    }else{
        res.send('User already exists, please login');
    }
});

module.exports = router;