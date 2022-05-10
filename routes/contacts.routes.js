let express = require('express');
let router = express.Router();
let uniqid = require('uniqid');
let Contact = require('../model/contacts.model').Contact;

router.get('/', async(req,res) =>{
    let contacts = await Contact.find();
    res.send(contacts);
});

router.post('/', async(req,res) =>{
    let newContact = new Contact({
        id: uniqid(),
        fname: req.body.fname,
        lame: req.body.lame,
        email: req.body.email,
        number: req.body.number,
        date: new Date(),
        msg: req.body.msg
    });
    await newContact.save();
    res.send('contact created');
});

router.delete('/:id', async(req,res) =>{
    let id = req.params.id;
    await Contact.deleteOne({id: id});
    res.send('contact deleted');
})

module.exports = router;