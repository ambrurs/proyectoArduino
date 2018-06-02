var JSONTCPSOCKET = require('json-tcp-socket');
 
var JSONTCPSOCKET = new JSONTCPSOCKET({tls: false});
var server = new JSONTCPSOCKET.Server();
 
server.on('connection', function (socket) {
    console.log('client connected: ', socket.socket.remoteAddress);
 
    socket.on('data', function (data) {
        console.log('json:', data.item);
    });
 
    var a = {item: 'A', a: 'asda'};
 
    socket.write(a);
});
 
server.listen(5055, '0.0.0.0');
 
console.log('Server listening 0.0.0.0:5055');