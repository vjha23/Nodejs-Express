const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
    res.send('Express application')
})

app.listen(3000, () => {

    console.log('application started at 3000 port')
})