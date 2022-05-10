let express = require('express');
let router = express.Router();
let Review = require('../model/reviews.model').Review;
let uniqid = require('uniqid');


router.get('/', async(req,res) =>{
    let reviews = await Review.find();
    res.send(reviews);
})

router.post('/', async(req,res) =>{
    let reqBody = req.body;
    let newReview = new Review({
        id:uniqid(),
        name:reqBody.name,
        email:reqBody.email,
        review: reqBody.review,
        date: new Date(),
        destionation: reqBody.destionation,
        imgURL: reqBody.imgURL
    });
    await newReview.save();
    res.send('review saved');
});

router.delete('/:id', async(req,res) =>{
    let id = req.params.id;
    await Review.deleteOne({id: id});
    res.send('review deleted');
})

module.exports = router;

