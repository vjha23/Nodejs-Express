const express = require('express');
const app = express();

// creating the middleware
const myLogger = function (req, res, next) {
    console.log('Logged');
    next();
}

const requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
}
// using the middleware
app.use(myLogger);
app.use(requestTime)

// getting the response
app.get('/', (req, res) => {
    res.send(`Current time: ${req.requestTime}`)
})

app.listen(3000, () => { console.log('app started on port 3000') })