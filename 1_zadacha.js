"use strict";
function tTe(a, b, c) {
	var func = {};
	func.boofer = [a, b, c];
	func.main = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A" ,"B" ,"C" ,"D" ,"E" ,"F"];
	func.result = [0, 0];
	func.hex = "";
	for (var i = 0; i < 3; ++i) {
			for (var j = 2; j != 0; --j) {			
				func.result[j-1] = func.main[func.boofer[i] % 16];
				func.boofer[i] = ~~(func.boofer[i] / 16);
			}
			for (var k = 0; k < 2; ++k) {
				func.hex += func.result[k];
			}
	}
	return func.hex;
}
console.log (tTe(145, 168, 245));
console.log (tTe(255, 0, 255));
console.log (tTe(255, 255, 0));
console.log (tTe(0, 255, 255));
