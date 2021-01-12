
const http = require('http')

http.get('http://api.open-notify.org/astros.json', resp => {
    let data = '';
    resp.on('data', chunk => {
        data += chunk
    });
    resp.on('end', () => {
        let jsondata = JSON.parse(data)
        console.log(jsondata)
    })
})


