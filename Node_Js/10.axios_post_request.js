const axios = require('axios');



const data = JSON.stringify({
    name: 'Vijay Jha',
    Job: 'Content Writer'
})

const options = {
    hostname: 'reqres.in',
    path: '/api/users',
    method: 'POST',
    header: {
        'Content-Type': 'application/json'
    }
}
axios.post('https://reqres.in/api/users', data).then(res => {
    console.log(`Status code:${res.status}`);
    console.log(`Body:${JSON.stringify(res.data)}`);
}).catch(err => {
    console.log(err);
})