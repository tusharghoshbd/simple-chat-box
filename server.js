const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express();

const server  = require('http').createServer(app);
const io = require('socket.io')(server );




const PORT = process.env.PORT || 3000;

const chatRouter = require('./routers/chatRouter')



app.use(express.static(__dirname+'/views'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())



app.use('/chat', chatRouter);

// app.post('/', (req, res) => {
//     console.log(req.body)
// })

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// }) 

io.on('connection', (socket) =>{
    console.log('socket connetion is successfull');

    socket.on('message',(data)=>{
        console.log("connection-> message");
        io.emit('message',data);
    })

})

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    mongoose.connect('mongodb://localhost:27017/simple-chat', {useNewUrlParser: true},()=>{
        console.log("Database is Connected.");
    });
    
});

//https://stackoverflow.com/questions/10703513/node-js-client-for-a-socket-io-server (VVI to understand the socket.io-client);

//for single page. ex: everything is doing in server.js
//https://medium.freecodecamp.org/simple-chat-application-in-node-js-using-express-mongoose-and-socket-io-ee62d94f5804


