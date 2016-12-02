"use strict"

var n = prompt('Jak wysoka ma być choinka?');

document.write('Wysokość choinki: ' + n);

function rysujChoinke() {
	for(var i = 0; i <= n; i++) {
		var star = "";
		for(var j=0; j< i*2-1; j++){
			star += '*';

		}
		document.write('<br >');
		console.log(star);
		document.write(star);
	}
}

rysujChoinke();
