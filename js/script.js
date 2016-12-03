"use strict"

var rows = prompt('Jak wysoka ma być choinka?');

document.write('Wysokość choinki: ' + n);

function rysujChoinke(n) {
   	var star = "";
	for(var i = 0; i <= n; i++) {
		star = "";
		for(var j=0; j< i*2-1; j++){
			star += '*';
		}
		document.write('<br >');
		console.log(star);
		document.write(star);
	}
}

rysujChoinke(rows);
