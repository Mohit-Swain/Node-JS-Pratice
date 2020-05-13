const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('hii I am first middleware');
    next();
});

app.use((req, res, next) => {
    console.log('hii I am second middleware');
    next();
});

app.use('/users', (req, res, next) => {
    console.log('in /users');
    res.send('<h2>you are in /users </h2>');
});

app.use('/', (req, res, next) => {
    console.log('in /');
    res.send('<h2>you are in /</h2>');
});

app.listen(3000, () => {
    console.log('app is listening in port ', 3000);

});