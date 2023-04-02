const http = require('http')
const url = require('url')
const querystring = require('querystring') // 引用querystring
http.createServer((req,res) => {
    // console.log(req.url);

    const query = new URL(`${req.url}`,'http://localhost:9999/') 
    console.log(query)
    // let {query} =url.parse(req.url,ture)
    // console.log(query);
    console.log(query.searchParams.get('id'));
    console.log(query.searchParams.get('age'));
}).listen(9999)