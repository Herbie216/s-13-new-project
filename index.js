const express = require('express')

const server = express()

server.use(express.json())

server.get('/hello', (req, res) => {
    res.json('Hello, there.')
})

const port = process.env.PORT || 9000

server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
