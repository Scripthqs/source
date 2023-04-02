const express = require('express')
const router = express.Router()

router.post('/user/add',(req,res) => {
    res.send('后台的用户添加操作')
})
router.delete('/user/:id',(req,res) => {
    res.send('后台的用户删除操作')
})
router.put('/user/:id',(req,res) => {
    res.send('后台的用户修改操作')
})
router.get('/user/add',(req,res) => {
    res.send('后台的用户列表操作')
})

module.exports = router