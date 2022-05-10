let express = require('express');
let router = express.Router();
let Destination = require('../model/destinations.model').Destination;
let uniqid = require('uniqid');

router.get('/', async(req,res) =>{
    let destinations = await Destination.find();
    res.send(destinations);
});

router.get('/:id', async(req,res) =>{
    let id = req.params.id;
    let destination = await Destination.findOne({id: id});
    res.send(destination);
})

router.post('/', async(req,res) =>{
    let newDestination = new Destination({
        id: uniqid(),
        title: req.body.title,
        location: req.body.location,
        imgURL: req.body.imgURL,
        text: req.body.text,
        price: req.body.price,
        days: req.body.days,
        nights: req.body.nights,
        date: new Date()
        
    });
    await newDestination.save();
    res.send('Destination saved');
});

router.delete('/:id', async(req,res) =>{
    let id = req.params.id;
    await Destination.deleteOne({id: id});
    res.send('Destination deleted');
});

router.put('/:id', async(req,res) =>{
    let id = req.params.id;
    await Destination.updateOne({id: id}, req.body);
    res.send('Destination updated');
})

module.exports = router;