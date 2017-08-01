var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);


server.listen(4000, ()=>{
	console.log('listening on 4000');
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
	console.log('Connection was made successfully');
});