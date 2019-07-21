const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://omnistack:senha123@instac-voj6e.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
})

app.get('/', (req, res) => {
    return res.send("Hello world");
});

app.listen(3333);