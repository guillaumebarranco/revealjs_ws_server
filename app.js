const server = require('http').createServer();
const io = require('socket.io')(server);
const port = 3000;

io.on('connection', (client) => {

	client.on('slide', (data) => {
		io.emit('slide', data);
	});

	client.on('disconnect', () => {});
});

server.listen(port);
console.log(`server listening on port ${port}`);