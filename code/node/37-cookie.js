const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const port = 9999
app.use(cookieParser())
app.get('/', (req, res) => {
    if(req.cookies.is_old_user){
        res.send('欢迎回来，VIP9')
    }else{
        // res.cookie('is_old_user',1,{maxAge:86400*1000})单位是ms
        res.cookie('is_old_user',1)
        res.send('欢迎成为新会员，请充值8万升级')
    }
    
})
app.listen(port, () => console.log(`http://127.0.0.1:9999`))