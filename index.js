const http = require('http');
const express = require('express');
const PORT = 3000
const path = require('path');
const {Server} = require("socket.io")
const app = express();
const server = http.createServer(app)
const io = new Server(server)

io.on('connection', (socket)=>{
    socket.on('user-message',(message)=>{
        io.emit('message',message)
    })
})

app.use(express.static(path.resolve("./public")))

app.get('/',(req,res)=>{
    return res.sendFile("/public/index.html")
})

server.listen(PORT,()=>console.log(`listening on port ${PORT}`))