var range = document.getElementById('range');
var number = document.getElementById('number');
var commission = document.getElementById('red');
var greenBlock = document.getElementById('green');

setInterval (function(){
    number.value = range.value;
    greenBlock.style.height = number.value + 'px';
    // commission.style.height = (number.value * 10 / 100) + 'px'; 
}, 0);



