const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', (client) => {

	client.on('slide', (data) => {
		io.emit('slide', data);
	});

	client.on('disconnect', () => {});
});

server.listen(3000);
