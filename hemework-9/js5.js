/*
 1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 // concat
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */

let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];
let arr2 = [
  'a',
  0,
  0,
  'b',
  null,
  'c',
  'd',
  0,
  1,
  false,
  0,
  1,
  0,
  3, [],
  0,
  1,
  9,
  0,
  0,
  {},
  0,
  0,
  9
];

const moveZeroToEnd = (arr) => {

  let newArrayZero = [];
  let newArrayNotZero = [];

  arr.forEach((value) => {
    if (value === 0) {

      newArrayZero.push(value);

    } else {
      newArrayNotZero.push(value);
    }
  })

  let newArayConcat = [];

  return newArayConcat.concat(newArrayNotZero, newArrayZero);
}


console.log(moveZeroToEnd(arr1));
console.log(moveZeroToEnd(arr2));

/*
 2. Верните сумму двух найменьших чисел в массиве
 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10
 */
/*
выбрать самое маленькой число из массива
выбрать почти самое маленькой число из массива
сложить их
*/
const arrayForinNumber = [-4, -10, 25, 10];
// console.log(arrayForinNumber.max());
const isMinNumb = (a) => {

  return Math.min.apply(Math, a)
}


const minimalNumber = (arr) => {
  var max, premax, newArrayInMax;

  max = isMinNumb(arr);


  var indexArray = arr.indexOf(max);

  arr.splice(indexArray, 1);


  premax = isMinNumb(arr);

  return max + premax;
}

console.log(minimalNumber(arrayForinNumber));

/*
 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */

const nameShuffler = (str) => {

  var arrayBackNames = str.split(' ');
  var firstPartName = arrayBackNames[0];
  var secondPartName = arrayBackNames[1];
  var readyAnswer = `${secondPartName} ${firstPartName}`;
  return readyAnswer;

}
console.log(nameShuffler('john McClane'));
/*
 // !
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

Разделяет на строки, берет создает новый масив из слов, первый символ ставит с большой буквы и собирает масив
 */

const capMe = (arr) => {
  let finishArray = [];

  var UpperAlreadyreplece

  arr.forEach((value) => {
    var newArray = value.split('');

    var newArrayShift = newArray.shift();
    var newArrayShiftUpper = newArrayShift.toUpperCase();
    var UpperAlready = newArrayShiftUpper.concat(newArray);


    UpperAlreadyreplece = UpperAlready.replace(/,/g, "")

    finishArray.push(UpperAlreadyreplece);
  })




  return finishArray;
}
console.log(capMe(['jo', 'nelson', 'jurie']));
// capMe(['jo', 'nelson', 'jurie'])
// @SUPER
/*
 1. Найдите число отсутствующее в заданной последовательности
 example:
/// Пробовал через reduce - не получилось


  [1,3,5,9] => 7 (9-1) / 4 == 2
  [0,8,16,32] => 24
  [4, 6, 8, 10] => 2 // число сначала
  [0,16,24,32] => 8
 */

const random = (arr) => {

  const firstElem = arr[0];
  const lastElem = arr[arr.length - 1];
  const step = (lastElem - firstElem) / arr.length;

  for (var i = 0; i < arr.length; i++) {
    const numb = arr[i]
    const nextElem = arr[i + 1]
    if (nextElem) {
      return lastElem - arr[arr.length - 2]
    }
    if (numb + step !== nextElem) {
      return numb + step
    }
  }


}

console.log(random([1, 3, 5, 9])); //7
console.log(random([0, 8, 16, 32])); //24
console.log(random([0, 16, 24, 32])); //8
console.log(random([4, 6, 8, 10])); //2

/*
 Задача с собеседований*
 2. Напишите функция которая преобразовывает/открывает скобки всех
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов
 example:
  [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
  [25,10,[10,[15]]] => [25,10,10,15]
 */


const openBraces = (arr) => {

  return arr.reduce((newArray, value, index, arr) => {
    return Array.isArray(value) ?
      newArray.concat(openBraces(value)) :
      newArray.concat(value)
  }, [])
}

console.log(openBraces([25, 10, [10, [15]]]));
console.log(openBraces([
  [1, 2],
  [3, [4]], 5, 10
]));
