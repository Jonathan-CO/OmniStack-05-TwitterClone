const express=require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config')
const routes = require('./routes')
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(config.connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use((req, res, next)=>{
    req.io = io;
    return next();
})

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);