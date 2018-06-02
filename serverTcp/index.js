var net = require('net');

var server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	
	socket.on('data',function(data){
		socket.write(data+'\r\n');
	});
});

server.listen(4001, '206.189.206.12');

console.log("Server running at port 1337\n");