const server = require('http').createServer();
const io = require('socket.io')(server);
const port = 3000;

io.on('connection', (client) => {

	client.on('slide', (data) => {
		client.broadcast.emit('slide', data);
	});

	client.on('lightbox', (data) => {
		client.broadcast.emit('lightbox', data);
	})

	client.on('disconnect', () => {});
});

server.listen(port);
console.log(`server listening on port ${port}`);