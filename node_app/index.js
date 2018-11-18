var NanoTimer = require('nanotimer');
var timer = new NanoTimer();

var countToOneBillion = function() {
	var i = 0;
	while(i<1000000000){
		i++;
	}
};

var microsecs = timer.time(countToOneBillion, '', 'u');
console.log(microsecs);
