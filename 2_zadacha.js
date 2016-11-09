"use strict"

function reverseArray(a) {
	var b = [],  i = (a.length-1), j = 0;
	while (i >= 0) {
		b[j] = a[i];
		i--;
		j++;
	}
	return b;
}

function reverseArrayInPlace(a) {
	var i = (a.length-1), j = 0, k = 0, b = [];
	while (k < a.length) {
		b[k] = a[k];
		k++;
	}
	while (i >= 0) {
		a[j] = b[i];
		i--;
		j++;
	}
	return a;
}
var a = ["test", "to", "me", "testy"];
console.log(reverseArray(a));
console.log(a);
reverseArrayInPlace(a);
console.log(a);
