var range = document.getElementById('range');
var number = document.getElementById('number');
var commissionBlock = document.getElementById('red');
var greenBlock = document.getElementById('green');

var calcCommission = function ({commissionBlock, number}) {
    if (range.value <= 20) {
        return commissionBlock.style.height =  (number.value * 0.02) + 'px'; 
    } else if (range.value > 20 && range.value < 50) {
        return commissionBlock.style.height =  (number.value * 0.04) + 'px';
    } else if (range.value >= 75) {
        return commissionBlock.style.height =  (number.value * 0.08) + 'px'; 
    } else {
        return commissionBlock.style.height =  (number.value * 0.06) + 'px'; 
    } 
}.bind(null, {commissionBlock, number});

var actions = {
    number, 
    calcCommission,
    getRangeValue() {
        return range.value = this.number.value;
    },
    getGreenBlockHeight() {
        return greenBlock.style.height = this.number.value + 'px';
    }
};

range.addEventListener('mousemove', function() {
    number.value = this.value;
});
range.addEventListener('mousemove', actions.getGreenBlockHeight.bind(actions));
range.addEventListener('mousemove', actions.calcCommission);

number.addEventListener('input', actions.getRangeValue.bind(actions));
number.addEventListener('input', actions.getGreenBlockHeight.bind(actions));
number.addEventListener('input', actions.calcCommission);