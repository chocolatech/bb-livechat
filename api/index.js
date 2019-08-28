var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

// app.get('/', function (req, res) {
//     res.send('<h1>Hello world</h1>');
// });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
    // socket.on('disconnect', function () {
    //     console.log('user disconnected');
    // });
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});