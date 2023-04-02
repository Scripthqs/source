//新建一个users表，并且只有需要一条数据

const express = require('express')
const { JsonWebTokenError } = require('jsonwebtoken')
const app = express()
const port = 3000
const md5 = require('md5')
const mongoose = require('mongoose')
const fs = require('fs')
const jwt = require('jsonwebtoken')
const jwt_secret = fs.readFileSync('./.env','utf-8')
// console.log(jwt_secret);

//连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/script',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})


//建立schema
const userSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: Number,
        required: false,
        default:0
    }
})
const Model = mongoose.model("User",userSchema,"users")


// app.use(express.json())
//接收post数据
app.use(express.urlencoded({extended: false}))

//自定义中间件加密密码
var passwd = ((req,res,next) => {
    // console.log(req.body.password);
    // console.log(md5(md5(req.body.password) + md5(req.body.password).substr(10,10)));
    req.body.password = md5(md5(req.body.password) + md5(req.body.password).substr(10,10))
    next()
})
//登录信息的初始化，为了得到加密的密码，用完之后为了安全建议注释/删除
// app.post('/init', (req, res) => {
//     console.log(req.body);
// })

app.post('/login',passwd,(req,res) =>{
    let data = req.body
    // console.log(data);
    //查询数据库，检查是否有这个用户
    Model.findOne(data).then((ret) => {
        // console.log(ret);
        if(ret === null){
            //没有用户就输入json数据，告诉用户
            res.send({error_code:1000,message:"账号或密码错误"})
        }else{
            //有这个用户（签发jwt）
            res.send({
                error_code:0,
                message:'ok',
                //参数1是载荷的数据，参数2是签名的secret
                _token: jwt.sign({userId:ret.userId},jwt_secret)
            })
        }
    })
})


//获取用户信息（必须先获得令牌）
app.get('get_user_info',(req,res) => {
    let tmp = req.headers.authorization.split(" ")
    

})



app.listen(port, () => console.log(`http://127.0.0.1:3000`))

