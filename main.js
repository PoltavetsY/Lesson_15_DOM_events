var range = document.getElementById('range');
var number = document.getElementById('number');

setInterval (function(){
    number.value = range.value;
  }, 0);

