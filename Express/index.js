const http = require('http');
const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('In another middleware');
    res.send({
        name: 'Mohit',
        age: 21
    });
});

app.listen(3000);