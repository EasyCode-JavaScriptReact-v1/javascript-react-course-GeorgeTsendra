// 'use strict';

/*
 * TASK ! ! !
 * Сделайте пожалуйста с теми навыками которые у вас есть ТЕЛЕФОННЫЙ СПРАВОЧНИК
 *
 * Task 0  !!!! Didn't done!!!
 *
 * Создайте функцию конструктор Http, которая будет иметь 2 метода
 *
 * createServer() - принимает один аргумент функцию с двумя параметрами ctx и next
 * ctx: Object {
 *   req: Object
 *     PORT: number
 *     url: string
 *   res: Object
 *     status: number,
 *     message: string,
 *     header: Object {
 *       content-type:application/json
 *       }
 *   }
 * next: Function
 *
 *
 * при вызове listen(PORT, host) - в консоле должна отобразится надпись
 * "Server running on https://host:port"
 * и вызваться переданная в createServer функция
 *
 *
 * методы нужно вызывать через chain
 * после вызова метода listen() - должна вызываться переданная в createServer
 * первая функция и возвращать объект и функцию
 *
 * */

function Http() {};


Http.prototype.createServer = function(fn) {
 let stx = {
   req: {
      port: 123,
      url: `http`,
   },
   res: {
     status: 0,
     message: `ok`,
     haeder: {
       'content-type': `application/json`,
     }

   }

 }

 this.callback = () => {
   fn(ctx , ()=>{})
 }
 return this;
}

Http.prototype.listen = function(PORT, host) {
  console.log(`Server running on https://${host}:${PORT}`);


};

const server = new Http().createServer(function(ctx, next) {
    console.log(ctx);
  }).listen(3000, 'localhost');


// server.createServer(function(ctx, next) {
//  console.log(ctx);
// })


// console.log(server);
// TASK 1
// Создать класс Human, у которого будут свойства обычного человека:
// имя, возраст, пол, рост, вес.
// Используя прототипное наследование создать дочерние классы Worker
// (дописать в них поля места работы, зарплата, метод "работать")
// и Student (дописать поля места учебы, стипендией, метод "смотреть сериалы")
//
// Создать несколько экземпляров классов Worker и Student, вывести их в консоль.
// Убедиться что они имеют поля родительского класса Human


function Human(name,age,sex,hight,weight) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.hight = hight;
  this.weight = weight;
}
function Worker(sallary, keyshiya) {
  this.sallary = sallary;
  this.workPlace = keyshiya;

}



function Student(university, scholarship) {
  this.university = university;
  this.scholarship = scholarship;

}




Worker.prototype = Object.create(Human.prototype);
Worker.prototype.constructor = Worker;
Worker.prototype.arbeiten = function() {
  console.log(`arbeite macht frie`);
}

Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;
Student.prototype.lookingOfTVSeries = function() {
    console.log(`Say: Lannisters always pay their debts`);
}

let studentExemplar1 = new Student(`HPI`,`-1200`);
let workerExemplar1 = new Worker(`400$`,`somewhere`);
let humanExample1 = new Human(`Vasia`,`18`,`man`,`165`,`55`);

console.log(studentExemplar1);
console.log(workerExemplar1);
console.log(humanExample1);

// @SUPER

/*
 *
 * TASK 0
 * Создайте функцию обертку над другой функцией
 * Каждый раз при вызове внутренней функции в консоле будут отображаться аргументы функции
 * которую мы обернули
 *
*/
