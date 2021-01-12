const fs = require('fs');

const content = 'Node js';

fs.writeFile('text.txt', content, { flag: 'a+' }, err => {
    if (err) {
        console.error(err)
        return
    }
    console.log('Succesfully done!')
})