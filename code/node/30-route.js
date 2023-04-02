
const express = require('express')
const app = express()

const backend = require('./router/backend')
const frontend = require('./router/frontend')
app.use('/backend',backend)
app.use('/frontend',frontend)


// app.post('/backend/user/add',(req,res) => {
//     res.send('后台的用户添加操作')
// })
// app.delete('/backend/user/:id',(req,res) => {
//     res.send('后台的用户删除操作')
// })
// app.put('/backend/user/:id',(req,res) => {
//     res.send('后台的用户修改操作')
// })
// app.get('/backend/user/add',(req,res) => {
//     res.send('后台的用户列表操作')
// })


// app.get('/frontend/news',(req,res) => {
//     res.send('前台新闻列表操作')
// })
// app.get('/frontend/news/:id',(req,res) => {
//     res.send('前台新闻详情操作')
// })
// app.get('/frontend/news/share/:id',(req,res) => {
//     res.send('前台新闻分享操作')
// })
// app.post('/frontend/news/zan/:id',(req,res) => {
//     res.send('前台新闻点赞操作')
// })

app.listen(9999,() => {
    console.log('server is running at http://127.0.0.1:9999');
})

