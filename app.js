const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();


//routes
app.get('/', (req, res) => {
    res.response('Home');
});

app.get('/posts', (req, res) => {
    res.response('Post');
});

//connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('Connect to DB')
);


//listen to the server
app.listen(3000);