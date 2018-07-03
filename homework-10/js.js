/*
 *
 * Задача 0
 *
 * Что вернет выражение z(x) ?
 * Напишите ответ своими словами как вы понимаете
 * В консоле не смотрите, сначала напишите, после проверьте себя
 *
 * */

let y = 5;
let x = () => y;

let z = t => {
  let y = 5;
  t();
};
console.log(y);

console.log(z(x)); // в ф-ции z внутри принимает как аргумент ф-цию и запускает ее. не возвращает ничего!!

/*
 *
 * TASK 1
 * Создайте функцию которая будет превращать
 * передаваемую строку в html тэг
 *
 *
 * */

let $ = (a)=> {
  return `<${a}></${a}>`
};

let createBODY = $('body');
let createDIV = $('div');
console.log(createBODY); // <body></body>
console.log(createDIV); // <div></div>

/*
 *
 * TASK 2
 *
 * Создайте объект к которому можно будет применить любое число вызовов
  // obj.method().method().method()
  ---------------
 *  Передаваемое значение должно возвращаться в виде html тэгов (TASK 1)
 *  Передаваемые аргументы должны быть только в виде строки
 * */



var ezjQuery = {
  innerAray : [],

};

ezjQuery.add =(a, b)=>{
  let startString = `<${a}>`;
  let endString = `</${a}>`;

  ezjQuery.innerAray.splice(ezjQuery.innerAray.length/2, 0,startString,endString);
  if (b) {
    ezjQuery.innerAray.splice(ezjQuery.innerAray.length/2, 0, b);
  }
  //
  return ezjQuery.innerAray.join("");
}

ezjQuery.render =()=> {
return ezjQuery.innerAray = [];
}

console.log(ezjQuery.add('body', )); // <body></body>
console.log(ezjQuery.add('div')); // <body></body><div></div>
console.log(ezjQuery.add('h1')); // <body></body><div></div><h1></h1>
// ezjQuery.render();
/*
 *
 * TASK 3
 * Доработйте метод add чтобы на каждом вызове следующий
 * тэг помещался внутри предыдущего !
 ---
 * И добавьте объекту ezjQuery метод render, который будет возвращать
 * сгенерированную строку
 -----
 * Методу add - второй параметр, который будет размещать
 * информацию внутри тэга
 *
 */

// example
var helloList
   ezjQuery.add('body') // <body></body>
  helloList = ezjQuery.add('div') // <body><div></div></body>
  ezjQuery.add('ul') // <body><div><ul></ul></div></body>
  ezjQuery.add('li', 'Hello') //<body><div><ul><li>Hello</li></ul></div></body>
  ezjQuery.render();
// console.log(helloList); // <body><div><ul><li>Hello</li></ul></div></body>
//  // Обратите внимание, что после вызова render создание строки началось сначала
//
// var bodyDiv = ezjQuery
//   .add('body') //<body></body>
//   .add('div') //<body><div></div></body>
//   .render();
// console.log(bodyDiv); //<body><div></div></body>

// Для выполнивших все задания
// сделайте document.write(helloList) увидите результат :)
document.write(helloList);
// @SUPER
/*
 * Переименуйте объект ezjQuery в $.
 * Создание перевого метода должено быть без метода
 *
 * $('body').add('li', 'hi').render() // <body><li>hi</li></body>
 *
 * */
