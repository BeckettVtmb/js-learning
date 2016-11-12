"use strict"

/*Блок переменных и задачи нач. значений.*/

var table = document.createElement('table');
var tr = document.createElement('tr');
var td = document.createElement('td');
var td_w = document.createElement('td');
var td_b = document.createElement('td');
var mas = ["A","B","C","D","E","F","G","H"], figure = ["п","л","к","с","Ф","К","с","к","л"], imag = [0,1,2,3,4,5,3,2,1], k, l, style_w, style_b;

table.style = "border: 2px solid black; background-color: #BEBEBE; border-spacing: 0px;";
td.style = "width: 40px; height: 40px; text-align: center;";
style_w = "width: 40px; height: 40px; text-align: center; font-size: 24pt; background-color: #FFF; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;";
style_b = "width: 40px; height: 40px; text-align: center; font-size: 24pt; background-color: #000; text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;";

/* Задание 1 Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-тэги по своему желанию. 
Доска должна быть разленована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться 
числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.*/

function createTable() {
	document.body.insertBefore(table, document.body.children[1]);
	td_w.style = style_w;
	td_b.style = style_b;
	for (var i = 0; i < 9; i++) {
		table.appendChild(tr.cloneNode(true));
		k = (i%2) ? true:false;
		for (var j = 0; j < 9; j++) {
			l = (j%2) ? true:false;
			if ((j === 0)&&(i === 8)) {
				td.innerHTML = "";
				table.children[i].appendChild(td.cloneNode(true));
			}
			else if ((i != 8)&&(j === 0)) {
				td.innerHTML = ""+(i+1)+"";
				table.children[i].appendChild(td.cloneNode(true));
			}
			else if ((i === 8)&&(j != 0)) {
				td.innerHTML = mas[j-1];
				table.children[i].appendChild(td.cloneNode(true));
			}
			else if (!k) {
				if (l) {
					table.children[i].appendChild(td_w.cloneNode(true));
				}
				else {
					table.children[i].appendChild(td_b.cloneNode(true));
				}
			}
			else  {
				if (!l) {
					table.children[i].appendChild(td_w.cloneNode(true));
				}
				else {
					table.children[i].appendChild(td_b.cloneNode(true));
				}
			}
		}
	}
}
//createTable();

/* Задание 2 Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К-король, 
Ф – ферзь и тп., причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.*/

function pushTable() {
	for (var j = 1; j < 9; j++) {
			table.children[1].children[j].style = (j%2)? style_b + "color: #000;":style_w + "color: #000;";
			table.children[1].children[j].innerHTML = figure[0];
			table.children[6].children[j].style = (j%2)? style_w + "color: #fff;":style_b + "color: #fff;";
			table.children[6].children[j].innerHTML = figure[0];
			table.children[0].children[j].style = (j%2)? style_w + "color: #000;":style_b + "color: #000;";
			table.children[0].children[j].innerHTML = figure[j];
			table.children[7].children[j].style = (j%2)? style_b + "color: #fff;":style_w + "color: #fff;";
			table.children[7].children[j].innerHTML = figure[j];
	}
}
//pushTable();

/* Задание 3 Заменить буквы, обозначающие фигуры картинками*/

function pushTableImage() {
	for (var j = 1; j < 9; j++) {
			table.children[1].children[j].style = (j%2)? style_b + "color: #000;":style_w + "color: #000;";
			table.children[1].children[j].innerHTML = '<img src="./'+0+'1.png" alt="*" width="20" height="20"/>';
			table.children[6].children[j].style = (j%2)? style_w + "color: #fff;":style_b + "color: #fff;";
			table.children[6].children[j].innerHTML = '<img src="./'+0+'0.png" alt="*" width="20" height="20"/>';
			table.children[0].children[j].style = (j%2)? style_w + "color: #000;":style_b + "color: #000;";
			table.children[0].children[j].innerHTML = '<img src="./'+imag[j]+'1.png" alt="*" width="20" height="20"/>';
			table.children[7].children[j].style = (j%2)? style_b + "color: #fff;":style_w + "color: #fff;";
			table.children[7].children[j].innerHTML = '<img src="./'+imag[j]+'0.png" alt="*" width="20" height="20"/>';;
	}
}
//pushTableImage();
