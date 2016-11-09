"use strict"

function arrayToList(a) {
	return ({value: a[0], rest: {value: a[1], rest: {value: a[2]}}});
}

function listToArray(b) {
	var massiv = [], i = 0;
	function inList(c) {
		if ("rest" in c) {
			massiv[i] = c.value;
			i++;
			inList(c.rest);
		} else return massiv[i] = c.value
	}
	inList(b);
	return massiv;
}

function prepend(el, list) {
	return ({value: el, rest: list})
}

function nth(list, num) {
	if ((num < 0)||(typeof(num) != "number")) return "Вы ввели отрицательное число и воовсе не число!"
	var i = 0, result;
	function showEl(d) {
		if (i == num) {
			return result = d.value;
		}
		else if ("rest" in d) {
				i++;
				showEl(d.rest);
			}
		else return result =  undefined;
	}
	showEl(list);
	return result;
}


console.log(arrayToList([1, 2, 3]));
console.log(nth(arrayToList([1, 2, 3]), 2));
console.log(prepend(5, arrayToList([1, 2, 3])));
console.log(listToArray(prepend(5, arrayToList([1, 2, 3]))));
