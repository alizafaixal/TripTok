let mongoose = require('mongoose');

let Schema = mongoose.Schema;
let reviewSchema = new Schema({
    id:String,
    name:String,
    email:String,
    review: String,
    date: String,
    destionation: String,
    imgURL: String
});

let Review = mongoose.model('Review', reviewSchema);

// let newReview = new Review({
//     id:'String',
//     name:'String',
//     review: 'String',
//     date: 'String'
// });

// newReview.save().then(() => console.log('review saved'));

module.exports = {Review : Review}