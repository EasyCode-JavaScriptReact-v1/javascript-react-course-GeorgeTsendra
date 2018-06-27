/*
 *
 * TASK 1
 *
 * Напишите функцию которая будет вызываться трижды и складывать
 * все передаваемые ей числа
 *
 * */

function add(x) {
 return function(z) {
   return function(v) {
     return x + z + v;
   }
 }
}

console.log(add(1)(2)(3)); // 6
console.log(add(10)(5)(15)); // 30

/*
 *
 * TASK 2
 *
 * Напишите функцию которая возвращает объект и одно из свойств объекта
 * это функция
 * После каждого нового вызова метода объекта(функции объекта) в консоле должно отображаться
 * число на 1 больше чем предыдущее
 * ---------------------------------------
 * так же у объекта должен быть метод обнуления счетчика
 * Узнать счетчик напрямую в объекте, нельзя
 *
 * */

function patternModule() {
 let someObj = {};
 let count = 0;
  someObj.method = function() {
    count ++;
    return count;
  }
  someObj.resetCounter = function () {
    return count = 0 ;
  }

 return someObj;
}

// patternModule

let test = patternModule(); // 0
console.log(test.method()); //1
console.log(test.method()); //2
console.log(test.method()); //3
console.log(test.resetCounter()); //0
console.log(test.method()); //1

/*
 * TASK 1
 *
 * Напишите функцию которая принимает 4 аргумента:
 *
 * -  Объект
 * -  Имя свойства с которым связывается метод
 * -  Сколько раз можно вызвать метод *
 * -  Объявление привязываемого метода ( функция )
 *
 *  При вызове метода отобразите сумму передаваемых
 *  параметров.
 *  Когда заканчивается счетчик, отображается ошибка
 *
 * */

let jun = {};

function methodCounter(obj, name, num, fn) {
  let count = 0;
  let summ = 0;
  let maxLimit = num;
  //
  // obj.addCounter = function(maxCount, methodObj) {
  //     return maxLimit = maxCount;
  // }
  obj[name] = function(a,b,c,d) {
    let sumArgs = a + b + c +d;
    if (count >= maxLimit ) {
      count = 0;
      return `${count}, ${fn(sumArgs)}`;
    }else {
      count ++;
      if (fn(sumArgs) == `ERROR ! add more methods`) {
        return  `${fn(sumArgs)}`;
      }else {
        return `${count}, ${fn(sumArgs)}`
      }
    }
  }
}
methodCounter(jun, 'logger', 2, function(args){
  if (args) {
    return args;
  }else {
      return `ERROR ! add more methods`;
  }
});

console.log(jun.logger(1, 2, 3, 4)); // 1, 10
console.log(jun.logger(1, 2, 3, 4)); // 2, 10
console.log(jun.logger(1, 2, 3, 4)); // error
console.log(jun.logger(5, 5, 5, 5)); // 1, 20
console.log(jun.logger(5, 5)); // ERROR ! add more methods

// console.log(jun.addCounter(10, 'logger'));
// // @SUPER,

/*
 * Добавьте функции methodCounter, возможность увеличивать счетчик
 * на заданное число
 *
 * */
