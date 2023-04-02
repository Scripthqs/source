const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.post('/post',(req,res) => {
    console.log(req.body)
})

app.listen(9999,() => {
    console.log('http://127.0.0.1:9999');
})