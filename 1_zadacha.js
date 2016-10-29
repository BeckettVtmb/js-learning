"use strict";
var a = "Fizz", b = "Buzz", i = 1;

while (i!=101) {
	if ((i%5 != 0) && (i%3 != 0)) console.log(i);
	else if ((i%5 == 0) && (i%3 == 0)) console.log(a+b);
	else if ((i%3 == 0) && (i%5 != 0)) console.log(a);
	else console.log(b);
	++i; 
}
