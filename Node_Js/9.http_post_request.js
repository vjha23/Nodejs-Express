const http = require('https');

const data = JSON.stringify({
    name: 'Vijay Jha',
    job: 'Developer'
})

const options = {
    hostname: 'reqres.in',
    path: '/api/users',
    method: 'POST',
    header: {
        'Content-Type': 'application/json'

    }
}

// request
const req = http.request(options, (res) => {
    let data = '';
    console.log('Status code', res.statusCode)

    res.on('data', (chunck) => {
        data += chunck;
    })
    res.on('end', () => {
        console.log('Body:', JSON.parse(data));
    })
})
req.write(data)
req.end();