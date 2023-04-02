const express = require('express')
// const querystring = require('querystring')

const app = express()
app.use(require('./middleware/cs-body-parse'))

app.post('/post',(req,res) => {
    console.log(req.body);
})
app.listen(9999,() => {
    console.log('http://127.0.0.1:9999');
})

