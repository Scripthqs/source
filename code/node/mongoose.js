const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/jiaoyou",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 4
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: Number,
        require: false
    },
    mobile: {
        type: String,
        require: true
    }
})

//建立model
//参数1：模型名，一般就是表名，建议首字母大写
//参数2：定义的是Schema
//参数3：真实意义上的表名，可以胜省略不写，不写默认为模型名的复数形式。
const model = mongoose.model('User',userSchema,'user')

app.get('/', (req, res) => {
    // console.log(req.query);
    model.insertMany(req.query)
})
app.put('/update:id', (req, res) => {

})
app.delete('/update:id', (req, res) => {

})
app.get('/selete', (req, res) => {

})
app.listen(9999, () => console.log(`http://127.0.0.1:9999`))