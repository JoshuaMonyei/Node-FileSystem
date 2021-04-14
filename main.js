const fetch = require('node-fetch');
const fs = require("fs");

const fetchData = async() => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const response = await fetch(url);
    const data = await response.json();
    let info = JSON.stringify(data, null, 2);
    return info; 
}

fetchData().then(info => {
    fs.writeFile('./result/posts.json', info, (err) => {
        if (err) throw err;
        console.log('file created successfully');
    });
}).catch(err => {console.log(err)});

