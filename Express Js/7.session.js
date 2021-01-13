const express = require('express');
const app = express();
const session = require('express-session');

const Port = process.env.Port || 3000;

// use the sesssion module as middleware
app.use(session({
    secret: 'secret key',
    resave: true,
    saveUninitialized: true
}));

// creating session at root
app.get('/', (req, res) => {
    req.session.name = 'Vijay';
    return res.send('Session set');
})

// getting session value
app.get('/session', (req, res) => {
    var name = req.session.name;
    return res.send(name);
})

// destroying the session
app.get('/destroy', (req, res) => {
    req.session.destroy(function (err) {
        console.log('session destroy');
    });
    res.end('session destroyed!')
})

app.listen(Port, () => {
    console.log('application started at port 3000');
})