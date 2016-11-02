"use strict"; // Задание 2 к 4 уроку, для нечетных чисел выводит - true (т.е. 1), для четных - false (т.е. 0)
function isEven(a) {
	a = (a < 0) ? -a : a; //Исправление для отрицательных чисел - четность от знака не зависит, поэтому можно просто избавиться от "-"
	if (a === 0) {
		return false;
	} else if (a === 1) {
		return true;
	} else {
		return isEven(a-2); 
	}
}
console.log("Вывод функции isEven(50):")
console.log(isEven(50));
console.log("Вывод функции isEven(75):")
console.log(isEven(75));
console.log("Вывод функции isEven(-1):") // без исправления в строке 3 кода - рекурсивная функция будет вызывать себя "вечно", т.к. для отрицательных значени N-2 будет лишь увеличивать параметр функции, а не сводить его к 0 или 1.
console.log(isEven(-1));
