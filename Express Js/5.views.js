const express = require('express');
const app = express();

const Port = 3000;

// setting the template engine pug
app.set('view engine', 'pug')

// creating route to render this page
app.get('/', function (req, res) {
    res.render('index.pug', { title: 'Express Application', h1: 'Express Application', p: 'Express Application' })
}).listen(Port, () => { console.log('server started on port 3000'); })