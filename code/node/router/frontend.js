const express = require('express')
const router = express.Router()

router.get('/news',(req,res) => {
    res.send('前台新闻列表操作')
})
router.get('/news/:id',(req,res) => {
    res.send('前台新闻详情操作')
})
router.get('/news/share/:id',(req,res) => {
    res.send('前台新闻分享操作')
})
router.post('/news/zan/:id',(req,res) => {
    res.send('前台新闻点赞操作')
})
module.exports = router