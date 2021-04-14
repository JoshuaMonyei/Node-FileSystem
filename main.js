const fetch = require('node-fetch');
const fs = require("fs");

const fetchData = () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    fetch(url).then((res) => res.json()).then(data =>  {console.log('Data preview:','\n', data);
        let info = JSON.stringify(data, null, 2);
        fs.writeFile('./result/posts.json', info, (err) => {
        if (err) throw err;
        console.log('file created successfully')})
    }).catch(err => {console.log(err)})

}
fetchData()

