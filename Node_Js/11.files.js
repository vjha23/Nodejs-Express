
const fs = require('fs');

fs.readFile('text.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
})

// syncronsiley read
const data = fs.readFileSync('text.txt', { encoding: 'utf-8', flag: 'r' });
console.log(data);

fs.stat('text.txt', (err, stats) => {
    if (err) {
        console.error(err);
        return
    }
    console.log(stats.isFile());
    console.log(stats.isDirectory());
})