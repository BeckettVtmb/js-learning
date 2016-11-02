"use strict"; // Задание 2 к 4 уроку
function countBs(a) {
	if (typeof(a) != "string") {
		return "!!Параметр функции countBs() - не строчный!!";
	}
	var i, j = 0, l = a.length;
	for (i = 0; i < l;  ++i) {
		j += (a.charAt(i) === "B") ? 1 : 0;
	}
	return j;
}
function countChar(a, b) {
	if ((typeof(a) != "string") || (typeof(b) != "string")) {
		return "!!Один из параметров функции countChar() - не строчный!!";
	}
	var i, j = 0, l = a.length;
	for (i = 0; i < l;  ++i) {
		j += (a.charAt(i) === b) ? 1 : 0;
	}
	return j;
}
console.log('Вывод функции countBs("BooleanBbB"):');
console.log(countBs("BooleanBbB"));
console.log('Вывод функции countChar("BooleanBbB", "o"):');
console.log(countChar("BooleanBbB", "o"));
