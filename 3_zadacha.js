"use strict";
function objectToQueryString(a) {
	var i, j;
	var result = "";
	for (i in a) {
		result += i + "=" + a[i] + "&";
		
	}
	result = result.substring(0, (result.length - 1));
	return result;
}

console.log(objectToQueryString({user: 'Dmitry'})); 
console.log(objectToQueryString({user: 'Dmitry', password: 'pass'})); 
console.log(objectToQueryString({user: 'Dmitry', password: 'pass', id: 1}));
