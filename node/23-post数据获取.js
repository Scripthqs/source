// const http = require('http')
// const querystring = require('querystring')
// const server = http.createServer()

// server.on('request',(req,res) => {

//     let arr = []
//     req.on('data',buffer => {
//         arr.push(buffer)
//     })

//     req.on('end',() => {
//         let buffer = Buffer.concat(arr)
        
//         let post = querystring.parse(buffer.toString())
//         console.log(post);
//     })
// })
// server.listen(9999,() => {
//     console.log('服务器http://127.0.0.1:9999');
// })

const http = require('http')
const querystring = require('querystring')
http.createServer((req,res) => {
    let arr = []
    req.on('data',buffer => {
        arr.push(buffer)
    })
    req.on('end',() => {
        let buffer = Buffer.concat(arr)
        let post = querystring.parse(buffer.toString())
        console.log(post);
    })
}).listen(9999)