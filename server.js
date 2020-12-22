const app = require('express')();
const server = require('http').createServer(app);
const options = { /* ... */ };
const io = require('socket.io')(server, options);

let hosts = new Set()


io.on("connection", (socket) => {
    console.log(socket.id); 
    hosts.add(socket.id)

    socket.on('disconnect',(reason)=>{
        //console.log("user disconnected"+socket.id)
        console.log("these are connected hosts")
        for(let host of hosts) console.log(host)
        hosts.delete(socket.id)
        console.log("After Deleting these are connected hosts")
        for(let host of hosts) console.log(host)

    })
  });


  app.get('/connect',(req,res)=> res.sendFile(__dirname+'/index.html'))
  app.get('/',(req,res)=> res.send("hello"))
  

server.listen(8082);