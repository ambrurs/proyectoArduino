/*var JSONTCPSOCKET = require('json-tcp-socket');
var ioSocket = require('socket.io-client')('http://206.81.14.221:8081/',{reconnect: true});
 
var JSONTCPSOCKET = new JSONTCPSOCKET({tls: false});
var server = new JSONTCPSOCKET.Server();
 
server.on('connection', function (socket) {
    console.log('client connected: ', socket.socket.remoteAddress);
 
    socket.on('data', function (data) {
        console.log('json:', data.item);

        switch(data.item){

        	case "temp":
        		ioSocket.emit("temperatura",data.val); 
        		break;

        }

    });
 
    ioSocket.on('ledPrint',function(data){
    	var color = {item: 'color', val: data};
    	socket.write(color);
    });

    var a = {item: 'A', a: 'asda'};
 
    socket.write(a);
});
 
server.listen(5055, '0.0.0.0');
 
console.log('Server listening 0.0.0.0:5055');*/