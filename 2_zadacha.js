"use strict";
function numberToObject(a) {
	var result = {};
	result.единицы = 0;
	result.десятки = 0;
	result.сотни = 0;
	result.единицы = a % 10;
	result.десятки = ~~((a % 100) / 10);
	result.сотни = ~~(a / 100);
	return result;
}
console.log (numberToObject(245));
console.log (numberToObject(127));
console.log (numberToObject(999));
console.log (numberToObject(0));
console.log (numberToObject(2));
console.log (numberToObject(35));
