const express = require('express')
const app = express()
const cookieSession = require('cookie-session')
const port = 9999

app.use(
    cookieSession({
        name:'sessionId',
        secret:'abcdefg',
        //设置不活动session时间
        maxAge:20 * 60 *1000,
        //让时间滚动刷新，刷新cd时间
        rolling: true
    })
)
app.get('/', (req, res) => {
    if(req.session['count']){
        req.session['count']++
        res.send(`你是本网站的第${req.session['count']}位访问者`)
    }else{
        req.session['count'] = 1
        res.send('你是本网站第1位访问者')
    }
})
app.listen(9999, () => console.log(`http://127.0.0.1:9999`))