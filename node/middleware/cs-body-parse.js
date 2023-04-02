const querystring = require('querystring')
var csBodyParse = (req,res,next) => {
    let arr = []
    req.on('data',(buffer) => {
        arr.push(buffer)
        // console.log(buffer);
    })
    req.on('end',() => {
        let buffer = Buffer.concat(arr)
        let post = querystring.parse(buffer.toString())
        req.body = post
        // console.log(post);

        //req.on是一个异步处理呈现，next必须让在里面执行，如果放在外面，则会导致数据并没有挂到body上，直接下一步
        next()
    })
}
module.exports = csBodyParse