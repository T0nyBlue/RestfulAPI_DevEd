const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();
app.use(bodyParser.json());

//import Routes
const postsRoute = require('./routes/posts.js');

app.use('/posts', postsRoute);


//routes
app.get('/', (req, res) => {
    res.send('Home');
});


//connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('Connect to DB')
);


//listen to the server
app.listen(3000);