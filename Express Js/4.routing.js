const express = require('express');
const { response } = require('express');
const app = express();

const Port = 3000;

const data = {
    id: 1,
    name: 'india'
}

app.get('/', (req, res) => {
    res.end('welcome to my homepage')
})

app.get('/about', (req, res) => {
    res.send('welcome to my about page');
})

app.get('/weather', (req, res) => {
    res.json(data);
})

app.listen(Port, () => { console.log('server is started on port 3000'); })