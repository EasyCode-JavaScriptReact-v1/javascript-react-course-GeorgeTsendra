/*
 *
 * TASK 1
 *
 * Создайте функцию которая будет запоминать переданные
 * ей аргументы, и прибавлять их в строку
 * и отображать в консоле всю строку
 *
 *
 * */

function solution1(someString) {
  let autputString = "";
  return function(string) {
    return autputString += " " + string;
  }

}

let stringBuffer = solution1();

console.log(stringBuffer('Замыкания')); // Замыкания
console.log(stringBuffer('Использовать нужно')); // Замыкания Использовать нужно
console.log(stringBuffer('Привет')); // Замыкания Использовать нужно Привет вызываем много раз

/*
 *
 * TASK 2
 * Напишите функцию которая принимает в качестве аргумента строку
 * из скобочек и посчитайте, * что все скобочки закрываются корректно
 *
 * */

// function validBraces(str) {
//   let someArrayNew = [];
//   let aratyToString = str.split("");
//   let count = 0;
//   console.log(aratyToString);
//   aratyToString.forEach(function(value, index, arr) {
//     let simbol = value;
//   for (var i = 0; i < arr.length; i++) {
//       if (simbol == "(" && arr[i] == ")" ) {
//         someArrayNew.push(true);
//         continue;
//       }
//       if (simbol == "[" && arr[i] == "]" ) {
//         someArrayNew.push(true);
//         continue;
//       }
//       if (simbol == "{" && arr[i] == "}" ) {
//         someArrayNew.push(true);
//         continue;
//       }else {
//         someArrayNew.push(false);
//       }
//     }
// });
// console.log(someArrayNew);
// for (var i = 0; i <= someArrayNew.length; i++) {
//     if (someArrayNew[i] == true) {
//       count ++;
//     }
//   }
//   console.log(count);
//   let someArrayNewlength = str.length / 2;
//   console.log(someArrayNewlength);
//   if (count == someArrayNewlength) {
//     return true
//   }else {
//     return false
//   }
// };


function validBraces(str) {
  let newString = str.split(''),
        stack = [],
        open = ['{', '(', '['],
        close = ['}', ')', ']'],
        closeCount,
        openCount;


    for (var i = 0; i < newString.length; i++) {
      openCount = open.indexOf(newString[i]);
      if (openCount !== -1) {


           stack.push(openCount);

           continue;
       }

       closeCount = close.indexOf(newString[i]);
       if (closeCount !== -1) {

           openCount = stack.pop();
           if (closeCount !== openCount) {
               return false;
           }
       }
    }


    if (stack.length !== 0) {
        return false;
    }

    return true;

}
console.log(validBraces('(){}[]')); // => returns true
console.log(validBraces('(}')); // => returns false
console.log(validBraces('[(])')); // => returns false
console.log(validBraces('([{}])')); // => returns true
console.log(validBraces('({[]})')); // => returns true
console.log(validBraces('({[})')); // => returns false
console.log(validBraces('({})')); // => returns true

// @SUPER

/*
 *
 * Напишите функцию которая будет принимать одно число и выводить сумму
 * всех натуральных чисел
 * sum(5) // 5+4+3+2+1
 *
 * Вычисления должны кешироваться, если в функцию попадает закешированное
 * значение, в консоле должно отобразиться
 * Значение взято из кэша
 *
 * Нельзя использовать внешние значения/переменные/функции
 *
 * */

// function sum(num) {
//     let summCount = 0;
//     let cashArr = new Array();
//
//     let resultCount = 0;
//     //счетчик, крорый выводит сумму всех натуральных чисел
//     for (var i = 0; i <= num; i++) {
//       summCount += i;
//     }
//     // если нет такого числа пугим его в массив
//     for (var i = 0; i < cashArr.length; i++) {
//       if (cashArr[i] !== summCount) {
//         cashArr.push(cashArr);
//         resultCount = 1;
//       }
//     }
//
//
//
//     console.log(summCount);
//     console.log(cashArr);
//     console.log(resultCount);
// }
//
// sum(5); // 15 Значение кешировано
// sum(5); // 15 Значение взято из кэш
//
// sum(6); // 21 Кешировано
// sum(6); // 21 Значение взято из кэша
