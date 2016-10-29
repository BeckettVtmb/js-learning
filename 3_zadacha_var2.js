"use strict"; // решетка 8х8 в виде шахматной доски
var i, j, k, a, b, c, d;
a = "#";
b = "\n";
c = " ";
d = "";
for (i = 1; i < 9; i++) {
	if (i%2 == 0) {
		for (j = 1; j < 9; j++) {
			if (j%2 == 0) {
				d += a;
			} else {
				d += c;
			}
		}	
	} else {
		for (j = 1; j < 9; j++) {
			if (j%2 == 0) {
				d += c;
			} else {
				d += a;
			}
		}
	}
	d += b;
}
console.log(d);
