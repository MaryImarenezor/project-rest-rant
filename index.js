const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', (req, res) => {
    res.send('hello world')
})
app.get('*', (req, res) => {
    res.send('<h1>404 Page</h1>').status(404)
})


app.listen(process.env.PORT)