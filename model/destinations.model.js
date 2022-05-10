let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let destinationSchema = new Schema({
    id: String,
    title: String,
    location: String,
    imgURL: String,
    text:String,
    description:String,
    date: String,
    price: String,
    days: String,
    nights:String
});

let Destination = mongoose.model('Destination', destinationSchema);

// let Destination = require('./model/destinations.model').Destination;

// let newDestination = new Destination({
//     id: 'String',
//     title: 'String',
//     location: 'String',
//     imgURL: 'String',
//     text:'String',
//     description:'String',
//     date: 'String',
//     price: 'String',
//     days: 'String',
//     nights:'String'
// });

// newDestination.save().then(() => console.log('saved'));

module.exports = {Destination: Destination};