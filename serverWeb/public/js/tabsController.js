  var app = angular.module('UserManagement', ['btford.socket-io']).
  factory('mySocket', function (socketFactory) {
    var Isocket = io('http://localhost:8081');
    mySocket = socketFactory({
      ioSocket: Isocket
    });
    return socketFactory();
  }).
  controller('UserManagementController', function($scope,mySocket,$http){

    $scope.valorServicio = "";
    $scope.colorP = "#000000";

    //LEDS 

    $scope.encenderAmarillo = function(){
      mySocket.emit('ledColor','#FFE400');
    }

    $scope.encenderRojo = function(){
      mySocket.emit('ledColor','#FF0000');
    }

    $scope.encenderAzul = function(){
      mySocket.emit('ledColor','#0000FF');
    }

    $scope.encenderVerde = function(){
      mySocket.emit('ledColor','#00FF00');
    }

    $scope.encenderMorado = function(){
      mySocket.emit('ledColor','#9A2EFE');
    }

    $scope.colorModal = function(){
      document.getElementById('color').click();
    }  

    $scope.colorSend = function(){
      /*debugger;
      var valorColor = $scope.colorP;
      document.getElementById("b_color").style.backgroundColor =  $scope.colorP;
      var r = hexToRgb(valorColor).r;
      var g = hexToRgb(valorColor).g;
      var b = hexToRgb(valorColor).b;

      /*mySocket.emit('ledColor','{r: '+r+', g: '+g+', b: '+b+'}');*/
      document.getElementById("b_color").style.backgroundColor =  $scope.colorP;
      mySocket.emit('ledColor',$scope.colorP);

    }


    function hexToRgb(hex) {
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
      });

      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }

    $scope.onServo = function(){
      document.getElementById("gear").classList.remove('gear-innerS');
      document.getElementById("gear").classList.add('gear-inner');

    }


    $scope.offServo = function(){
      document.getElementById("gear").classList.remove('gear-inner');
      document.getElementById("gear").classList.add('gear-innerS');
    }

    mySocket.on('temperaturaHtml',function(data){
      $scope.temp = data;

      if(data > 40){
        document.getElementById("h1Temp").classList.remove('temperatura-color');
        document.getElementById("h1Temp").classList.remove('temperatura-color3');
        document.getElementById("h1Temp").classList.add('temperatura-color2');
      }else if(data < 10){
        document.getElementById("h1Temp").classList.remove('temperatura-color');
        document.getElementById("h1Temp").classList.remove('temperatura-color2');
        document.getElementById("h1Temp").classList.add('temperatura-color3');
      }else{
        document.getElementById("h1Temp").classList.remove('temperatura-color2');
        document.getElementById("h1Temp").classList.remove('temperatura-color3');
        document.getElementById("h1Temp").classList.add('temperatura-color');
      }
    });

    mySocket.on('luz',function(data){

      if (data === 'true') {
        $("#fullpage").removeClass("night");
        $("#switch").removeClass("switched");
      }
      else {
        $("#fullpage").addClass("night");
        $("#switch").addClass("switched");

      }
    });

  });