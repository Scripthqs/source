const express = require('express')
const app = express()
const port = 3000

app.put('/user/:id', (req, res) => res.send(req.params.id))
app.put('/name/:id?', (req, res) => res.send(req.params.id))
app.listen(port, () => console.log(`Example app listening on port port!`))