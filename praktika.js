"use strict"

var id_zero = 0;

var users = [
	{
		id: id_zero,
		firstName: 'Dmitry',
		lastName: 'Kozlov',
		birthDay: '16.07.1990',
		phones: [
			'89001234567',
			'83431234567'
		] 
	},
	{
		id: ++id_zero,
		firstName: 'Ivan',
		lastName: 'Petrov',
		birthDay: '08.06.1956',
		phones: [
			'89001234567',
			'83431234567'
		] 
	}
];

function addUser() {
	var user = {};
	user.id = ++id_zero;
	user.firstName = prompt('Введите имя:');
	user.lastName = prompt('Введите фамилию:');
	user.birthDay = prompt('Дату рождения:');
	user.phones = [];
	while (true) {
		var phone = prompt('Номер телефона:(для выхода введите пустой номер)');
		if (!phone) break;
		user.phones.push(phone);
	}
	users.push(user);
	return console.log ("Контакт с идентификатором " + id_zero + " добавлен в справочник.");
}

function remUser(id_rem) {
	for (var i in users) {
		if (users[i].id === id_rem) {
			delete users[i];
			return console.log ("Контакт с идентификатором " + id_rem + " удален из справочника.");
		}
	}
}

function csvFormat(users) {
  return users.map(function(user) {
    return Object.keys(user).map(function(key) { 
      if(typeof user[key] == 'string' || typeof user[key] == 'number') return '"' + user[key] + '"'; 
      else return user[key].map(function(phone) { return '"' + phone + '"'; }).join(';');
    }).join(';');
  }).join('\r\n');
}

function search(value, users) {
	var result = [];
	var re = new RegExp(value, 'i');

	users.forEach(function(item){
		var findString =  item.firstName + ' ' + item.lastName;
		if (re.test(findString)) {
			result.push(item);
		}
	})
	return result;
}

//for (var i = 0; i < users.length; ++i) {
//  console.log('Id: ' + users[i].id, 'Имя: ' + users[i].firstName, ' Фамилия: ' + users[i].lastName, ' Дата рождения: ' + users[i].birthDay, ' Телефоны: ' + users[i].phones.join(', '));
//}
console.log(csvFormat(users));
addUser()
console.log(csvFormat(users));
remUser(1)
console.log(csvFormat(users));

function printUser(user){
		var row = document.createElement('div');
		row.id = 'u_' + user.id;
		row.className = 'row';
		row.innerHTML = '<div class="col">' + user.firstName + '</div>' + '<div class="col">' + user.lastName + '</div>' +
					'<div class="col">' + user.birthDay + '</div>' + '<div class="col">' + user.phones.join(', ') + '</div>' + '<div class="del_btn" onclick="delHandler(event)">X</div>';
		return row;
}

window.onload = function(event) {
	var usersTable = document.getElementById('users');
	console.log (usersTable);
	users.forEach(function(user){
		usersTable.appendChild(printUser(user));
	});
};
