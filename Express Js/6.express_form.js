const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// to use serialiaze data(post data) use this middleware
app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.render('index', { title: 'Form Handling' });
})

//submit the data using submit button and get all the data using post request
app.post('/form_submit', (req, res) => {
    const username = req.body.username
    const email = req.body.email
    res.end(`Your username is ${username} and your email is ${email}`)
})

app.listen(PORT, () => {
    console.log('Listerning to request on port 3000');
})

