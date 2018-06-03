var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.use(express.static(path.join(__dirname + '/public')));



app.get('/', function (req,res) { 
    res.sendFile(__dirname + '/index.html');
});

    io.on('connection', function (socket) {

        console.log("Conectado al socket", socket.id);

        socket.on('ledColor', function (data){
            console.log(data);
            socket.broadcast.emit('ledPrint', data);
          });

		    socket.on('ledChange', function (data){
            console.log("Entre a enviar un color");
            socket.broadcast.emit('ledHtml', data);
        });        

        socket.on('temperatura',function(data){
            socket.broadcast.emit('temperaturaHtml', data);
        });

        socket.on('onServo',function(){
            socket.broadcast.emit('onServoHtml');
        });        

        socket.on('offServo',function(){
            socket.broadcast.emit('offServo');
        });        



    });


http.listen(8081, function(){

  console.log("Escuchando por el puerto 8081");
});    