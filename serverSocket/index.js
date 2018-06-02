var JSONTCPSOCKET = require('json-tcp-socket');
 
var JSONTCPSOCKET = new JSONTCPSOCKET({tls: false});
var server = new JSONTCPSOCKET.Server();
 
server.on('connection', function (socket) {
    console.log('client connected: ', socket.socket.remoteAddress);
 
    socket.on('data', function (data) {
        console.log('json:', data.item);
    });
 
    var a = {item: 'A', a: 'asda'};
    var b = {item: 'B', b: 'asdasa'};
    var c = {item: 'asdadsadsadsasd87a8ds7ads67ad6sa6dsa', a: 1, b: 2, c: 3, d: 'asda', d: 'asdadsa'};
    var d = '{"item": "asdaasda", "a": "1", "b": "2", "c": "3", "d": "asda", "d": "asdasda"}';
    var e = '{"item": "ee", "a": "1", "d": "643", "d": "123"}';
    var f = '{"item": "dd", "a": "1", "d": "643", "d": "123"}';
 
    socket.write(a);
    socket.write(a);
    socket.write(a);
    socket.write(b);
 
    setInterval(function () {
        socket.write(e);
    }, 1000);
 
    setInterval(function () {
        socket.write(f);
    }, 1500);
 
    socket.write(d);
    socket.write(c);
    socket.write(b);
    socket.write(b);
});
 
server.listen(5055, '0.0.0.0');
 
console.log('Server listening 0.0.0.0:5055');