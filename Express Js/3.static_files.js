const express = require('express');
const path = require('path');

const app = express();

const publicpath = path.resolve(__dirname, 'public');

app.use(publicpath, express.static('static'));

<img src="/image.jpg"></img>

app.get('/', function (req, res) {
    res.send('Static Files');
    console.log(publicpath)
})

app.listen(3000, () => { console.log('app started on port 3000') })