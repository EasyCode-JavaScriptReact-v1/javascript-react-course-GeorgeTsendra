/*
 0 Алгоритмы
 Реализуйте функцию которая будет превращать трехмерный массив
 в двухмерный, а если массив двухмерный, тогда в трехмерный массив
 // solution([ [1, 'a'], [2, 'b'], [3, 'c'] ]) => [ [1, 2, 3], [a, b, c] ]
 // solution([ [1, 3, 5], [2, 4, 6] ]) => [ [1, 2], [3, 4], [5, 6] ]
 // solution([[]]) => []
 [ [ [ ] ] ] = [ [] ]
 ИСПОЛЬЗУЙТЕ МЕТОДЫ МАССИВОВ !
 */

 const flatten = arr => {
   return arr.reduce((newArr, value, index, arr) => {
     return Array.isArray(value) ?
      newArr.concat(flatten(value)) :
      newArr.concat(value)
    }, [])
};

const solution = array => {
  let arr = flatten(array)

  if (array.length == 2) {
    let firstArr = []
    let secondArr = []
    let therdArr = []
    let resultArr = []
    arr.forEach((value, index, arr) => {
      if (arr[index] == 1 || arr[index] == 2) {
        firstArr.push(value)
      }
      if (arr[index] == 3 || arr[index] == 4) {
        secondArr.push(value)
      }
      if (arr[index] == 5 || arr[index] == 6) {
        therdArr.push(value)
      }
    })
    resultArr.push(firstArr, secondArr, therdArr)
    console.log(resultArr);
  }
  if (array.length == 3) {
    let stringArr = []
    let numbArr = []
    let resultArr = []
    arr.forEach((value, index, arr) => {
      if (typeof value == 'number') {
        numbArr.push(value)
      }
      if (typeof value == 'string') {
        stringArr.push(value)
      }
    })
    resultArr.push(numbArr, stringArr)
    console.log(resultArr);
  }
  if (array.length == 0) {
    console.log(arr);
  }

};

solution([
  [1, 3, [5]],
  [2, 4, 6]
]);
solution([
  [1, 'a'],
  [2, 'b'],
  [3, 'c']
]);
solution([
  [
    []
  ]
])









const navigation = [
  {name: 'Главная'},
  {
    name: 'Каталог',
    children: [
      {
        name: 'Компьютеры',
        children: [{name: 'Ноутбуки'}, {name: 'Планшеты'}]
      }
    ]
  },
  {name: 'Профиль'}
];
/*
 Визуализируйте массив, если в коллекции есть свойство
 children,
 тогда создайте вложенный лист
 name - свойство h1
 children ul -> li
 Используйте innerHTML
<h1>Main</h1>
<ul>
  <h1>Catalog</h1>
  <li>
    <ul>
      <h1>Comp</h1>
      <ul>
        <li>
          <h1>Notebook</h1>
          <h1>...</h1>
        </li>
      </ul>
  </li>
*/
// let ul = document.createElement('ul')
// let h1 = document.createElement('h1')
// let li = document.createElement('li')
// let body = document.body;

const visualArray = arr => {
  let list = arr.map(value =>

    `<li>
      <h1>
       ${value.name}
      </h1>

    </li>`
  ).join("")
  let createNewList = arr => {
    if (!arr) {
      return ``;
    }
    let list = arr.map(value =>

      `<li>
          <h1>
          ${value}
          </h1>
          ${createNewList(value.children)}
        </li>`
    )
    return `<ul> ${list} </ul>`
  }
  return createNewList(arr);
};

console.log(visualArray(navigation))

/*  ПРИЛОЖЕНИЕ  */
// Добавьте скрипт который будет рисовать всю страницу с таблицей.
// https://github.com/aleksandra-maslennikova/telephone-book
// innerHTML должно быть максимум

/* ТЕСТ */

/*
* Добавьте реальных вопросов про JavaScript с вариантами
* ответов
*
*/

// 3. При нажатии на кнопку если были выбраны правильные ответы,
// отображайте "ПРАВИЛЬНО" или не правильно
// или отображайте значек X или галочку, возле вопроса



/* @SUPER-FRONT */

/*
* 4. По нажатию на кнопку(проверить) отобразится "модальное" окно в котором отобразится
* весь тест с отображенными правильными ответами(обозначьте их) и неправильными(тоже обозначьте)
* Отобразите количество правильных и неправильных ответов
* счетчик
* У модального окна будет 2 кнопки "пересдать" и "отправить"
* *
* Если все ответы правильные, кнопка пересдать не активна
* disabled
*
* По нажатию отправить, модальное окно закрывается и на экране надпись "ваши ответы успешно
* отправлены"
*
* --- Если все ответы правильные отобразите картинку
*
* По нажатию на пересдать - появляется снова наш тест сначала
*
* @Super-FRONT @ 2
* При загрузке странице добавьте таймер отсчета с милисекундами -> В модальном окне отобразите
* количество затраченного времени на тест
*
* */
