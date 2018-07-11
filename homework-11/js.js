/*
 *
 * Сделайте 4 объекта - не усложняйте, просто наследование
 * через __proto__
 - Пользователь
 - Верифицированный пользователь(админ)
 - Гость
 - База данных

 - База хранит информацию о пользователях
 - Пользователи знают мыло админа
 - админ знает пароль от базы данных
 - Гости могут зарегистрироваться в базе данных
 *
 * */


let user = {
  name: 'userName',
  password: 'qwerty',
  eMail: `user.eMail`
}
let admin = {
  name: 'adminName',
  password: '12345',

}
let adminPass = {
  eMail: `admin.eMail`
}
let visiter = {
  name: 'visiterName',

}
let dataBase = {

}
let databaseNameForregistration = {
  name: `mySQL`,
}
let dataBasePass = {
  password: '4321',
}

dataBase.__proto__ = user;
admin.__proto__ = adminPass;
user.__proto__ = adminPass;
dataBase.__proto__ = dataBasePass;
admin.__proto__ = dataBasePass;
dataBasePass.__proto__ = databaseNameForregistration;
visiter.__proto__ = databaseNameForregistration;

console.log(user);
console.log(admin);
console.log(visiter);
console.log(dataBase);


// function User(name, password, id, eMail) {
//   this.name = name;
//   this.password = password;
//   this.id = id;
//   this.eMail = eMail;
//   this.adminEMail = 0;
// }
//
// function Admin(name, password, id, eMail) {
//   this.name = name;
//   this.password = password;
//   this.id = id;
//   this.eMail = eMail;
// }
//
// function Visiter(name, password, id, eMail) {
//   this.name = name;
//   this.password = password;
//   this.id = id;
//   this.eMail = eMail;
// }
//
// function DataBase(name, password) {
//   this.name = name;
//   this.password = password;
//   this.allUsers = new User;
//
// }
//
// let newAdmin = new Admin(`adminName`, `1234`, 1, `Admin@samTiSuka@.com`);
// let newUser = new User(`Goga`, `qwerty`, 1, `Goga@com.ua`)
// let newDataBase = new DataBase(`mySQL`, `qwerty`)
// let newVisiter = new Visiter(`Dima`, `qwerty`, 2, `Dima@com.ua`)
// console.log(newAdmin);
// console.log(newUser);
// console.log(newDataBase);
// console.log(newVisiter);
