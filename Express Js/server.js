const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
    res.send('Vijay here');
});

app.listen(3000, () => {
    console.log("server started at 3000")
})