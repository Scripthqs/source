const express = require('express')
const app = express()
const fs = require('fs')
const port = 9999

app.get('/', (req, res) => {
    let url = 'jjjjjjjj.txt'
    // fs.readFile
    //try：尝试，结果具有未知性，成功走try,catch走下面
    try{
        let data = fs.readFileSync(url)
        res.send(data)
    }catch(error){
        throw new Error('你要找的文件失踪了')
    }
    // throw new Error('服务器发生致命错误')
    // res.send('welcome to my homepage')
})

app.use((err,req,res,next) => {
    //自己写一个html页面
    res.send(err.message)
    // next()，此时没使用价值
})

app.listen(port, () => console.log(`http://127.0.0.1:9999`))