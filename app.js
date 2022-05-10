let express = require('express');
let app = express();
let mongoose = require('mongoose');
let destinationRouter = require('./routes/destination.routes');
let reviewRouter = require('./routes/reviews.routes');
let contactRouter = require('./routes/contacts.routes');
let userRouter = require('./routes/users.routes');
app.use(express.json());


mongoose.connect('mongodb+srv://Aliza:Asdf1234@cluster0.ukmib.mongodb.net/travel');
// mongoose.connect('mongodb://localhost/Travel');

let uniqid = require('uniqid');

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening ${port}...`));
app.use(express.static('public'));
app.use('/destinations', destinationRouter);
app.use('/reviews', reviewRouter);
app.use('/contacts', contactRouter);
app.use('/users', userRouter);






