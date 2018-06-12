/*
* Напишите функцию которая будет принимать 1 аргумент и в зависимости от типа аргумента
*
* Если тип аргумента число или объект -> возвращать true
* Если тип аргумента функция -> возвращать false
* Если тип аргумента Строка и длина этой строки не равна 10 -> возвращать "длина вашей строки: <длина строки>
*                            Если длина 10 -> 'you win'
*
*
*
*
* */

const testForFun = `aaaaaaaaaa`;


// console.log(typeof testForFun);

    function LookForTypeOf(a) {

if ( typeof a === 'number' || typeof a=== 'object') {
  console.log(true);
}else if (typeof a === `function`) {
  console.log(false);
}else if (typeof a === `string` && a.length !== 10) {
  console.log(`длина вашей строки: ${a.length}`);
}else {
  console.log('you win');
}

    }

// LookForTypeOf(testForFun);
/*
*
*  Задача в классе !
*
* */


const webStore = {
  category: {

    notebook: [`ASUS`, `ASER`,`Lenova`],
    mobile: [`Iphone`,`Nokia`],
  },
};

function webStoreFun(someWebStore) {


const category = someWebStore.category;
const webStoreInnerNote = someWebStore.category.notebook;
const webStoreInnerMob = someWebStore.category.mobile;

for (let key in category) {
  console.log(`Ктегория: ${key}`);
  const innerCateg = someWebStore.category[key];

  for (var i = 0; i < innerCateg.length; i++) {
    console.log(` Подкатегория: ${innerCateg[i]}`);
  }

  }
}

webStoreFun(webStore);

/*
 1. Напишите функцию которая принимает 2 числа
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */

function numbersBetween(a, b) {

  const numbersBetweenArray = [];

  for (var i = a; i <= b; i++) {
    numbersBetweenArray.push(i);

  }
  return numbersBetweenArray;
}

numbersBetween(3, 5);
// 3, 4, 5

numbersBetween(10, 12);
// 10, 11, 12


/*
 2. Перепишите задачу FizzBuzz, но с использованием цикла.
 Расчет чисел должен идти до 100
 */

// 1. FizzBuzz 3, 5, 3 && % 5

function FizzBuzz(number) {

}

function fizzBuzz100(number) {

  for (var i = 1; i <= number; i++) {


    if (i % 3 ==0 && i % 5 == 0) {
      console.log(`FizzBuzz`);
    }else if (i%3 == 0) {
      console.log(`Fizz`);
    }else if (i%5 == 0) {
      console.log(`Buzz`);
    }else {
      console.log(i);
    }
  }
}

/*
 3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных



 */

let arr = [1, null, undefined, 'str', {}, [], function() {}];

function ArrayTypeOf(someArray) {

const newArray = [];
  for (var i = 0; i < someArray.length; i++) {

    newArray.push(typeof someArray[i])
  }
  console.log(newArray);

}
ArrayTypeOf(arr);
/*
 1. @@SUPER@@. Вам дан массив array, содержащий внутри объекты.
 Напишите функцию которая внутри цикла проходится по каждому элементу массива
 И проверяет какой тип данных содержит свойство age, если тип данных NaN,
 тогда добавляет данному объекту свойство unknownAge: true

 2. На основании нового массива, создайте новую функцию, которая вернет новый массив
  содержащий все объекты содержащие свойство unknownAge: true
 */

let array = Array.from({length: 35},
  (value, index) => (index % 2 ? {age: index + 2} : {age: NaN}),
);

const solution = function(arr) {

for (var i = 0; i < arr.length; i++) {

  function InnerForFun(a) {
    let typeOfI = a.age;
    let string = typeOfI + '';

    if (string == `NaN`){

      return a.unknownAge = true;
      string = +string;
    }else{

    }
  }

  InnerForFun(arr[i]);
}
return arr;
}


const newArray = [];
function newArrayFun(newArrayFun) {


  for (var i = 0; i < newArrayFun.length; i++) {

    if (newArrayFun[i].unknownAge === true) {

      newArray.push(newArrayFun[i]);


    }
  }
  return newArray;
}

newArrayFun(solution(array));
