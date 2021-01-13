const express = require('express');
const app = express();
const cookies = require('cookie-parser');

const Port = process.env.Port || 3000;

// use cookies as middleware
app.use(cookies());

let users = {
    name: 'Vijay',
    age: 21
}

// setting the homepage
app.get('/', (req, res) => {
    res.send('Cookies Creation setting');
})

// setting the cookie data
app.get('/setuser', (req, res) => {
    res.cookie('userData', users);
    res.send('User dataa added to cookes');
})

// getting the cookie data
app.get('/getuser', (req, res) => {
    res.send(req.cookies);
})

// destroying the cookies
app.get('/logout', (req, res) => {
    res.clearCookie('userData');
    res.send('Cookie destroyed!')
})

app.listen(Port, () => { console.log('application started at 3000'); })