let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let contactSchema = new Schema({
    id: String,
    fname: String,
    lame: String,
    email: String,
    number: String,
    date: String,
    msg: String
});

let Contact = mongoose.model('Contact', contactSchema);

// let newContact = new Contact({
//     id: 'String',
//     fname: 'String',
//     lame: 'String',
//     email: 'String',
//     number: 'String',
//     msg: 'String'
// });

// newContact.save().then(() => console.log('contact saved'));

module.exports = {Contact : Contact};