/*
TASK 0. Найдите числа которые повторяются нечетное количество раз
в массиве
*/


function solution(arr) {
  let newArr = [];
  arr.forEach((value, index, arr)=>{

    let firstVal = value;
    let count = 0;
    arr.forEach((value, index, arr)=>{
      if(value == firstVal){
        count ++
      }
    })
    if(count % 2){
      newArr.push(value)
    }
  })

newArr.sort((a,b)=>{
  return a > b;
})

  let newArrWithoutDoble = [];

  newArr.forEach((value,index,arr)=>{
    if (arr[index] != arr[index + 1]) {
      newArrWithoutDoble.push(arr[index])
    }

  })

  console.log(newArrWithoutDoble);
}



solution([12, 23, 34, 12, 12, 23, 12, 45])// -> [34 45]
solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,]) //-> [4 100 5000]
solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9])// -> [6 5 9 21]
solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]) //-> [8 16 23 42]
solution([2, 2, 44, 44]) //=> []




let someWebpackModule = `module.exports = {
    context: %%HOMEDIR%%,
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;

function someWebpackModuleFunk(value) {

  let valueSplit = value.replace(/%%HOMEDIR%%/g, './JavaScript-Basic')
                        .replace(/%%APP_DIR%%/g, 'fixtures/src')
                        .replace(/%%APPNAME%%/g, 'app.js')
  console.log(valueSplit);
}
someWebpackModuleFunk(someWebpackModule)


/* TASK - 1
Распарсите строку и замените
 %%HOMEDIR%% -> './JavaScript-Basic'
 %%APP_DIR%% -> 'fixtures/src'
 %%APPNAME%% -> 'app.js'
 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам
 Сделайте несколько вызовов данной функции
 *
 * */



/*
 TASK - 2 +
 Сделайте разметку как скриншоте используя HTML
 вам необходимо использовать тэги(!)
*/




/*
TASK 3
 JavaScript =>
  Создать объект с методами, которые будут динамически генерировать DOM
  Это будет тест, который мы будем разрабатывать в следующих заданиях.
  Сейчас вам нужно только динамически создать html,
  методы должны храниться в одном объекте.
  Изначально на странице должен быть только <body>,
  вызывая методы объекта нужно создать dom-элементы
*/

let app = {
  render(){
    let headerElem = document.createElement('header');
    let h1Elen = document.createElement('h1');
    h1Elen.textContent = 'Тест по программированию';
    headerElem.appendChild(h1Elen);
    console.log(headerElem);
    let mainElem = document.createElement('main');
    let formElem = document.createElement('form');
    mainElem.appendChild(formElem)

    let elems = [
    {
      question : '1.Вопрос №1',
      answers: [
        'вариант ответа 1',
        'вариант ответа 2',
        'вариант ответа 3'
      ]
    },
  {
    question : '2.Вопрос №2',
    answers: [
      'вариант ответа 1',
      'вариант ответа 2',
      'вариант ответа 3'
    ]
  },
  {
    question : '3.Вопрос №3',
    answers: [
      'вариант ответа 1',
      'вариант ответа 2',
      'вариант ответа 3'
    ]
  }
]

  elems.forEach((value,index,arr)=>{
    let divElem = document.createElement('div')
    let h2elem = document.createElement('h2')
    h2elem.textContent = value.question;
    divElem.appendChild(h2elem)
    let ulElem = document.createElement('ul')

    value.answers.forEach((value,index,arr)=>{
      let liElem = document.createElement('li')
      let labelElem = document.createElement('label')
      let inputElem = document.createElement('input')
      ulElem.appendChild(liElem);
      liElem.appendChild(labelElem)
      liElem.appendChild(inputElem)
      inputElem.type = 'checkbox';
      inputElem.id = "input";
      labelElem.textContent = value;
    })

    divElem.appendChild(ulElem)
    formElem.appendChild(divElem)
  })
  let divElem = document.createElement('div');
  let buttonElem = document.createElement('button');
  divElem.appendChild(buttonElem);
  formElem.appendChild(divElem)
  buttonElem.type = 'submit';
   buttonElem.name = 'submit';
   buttonElem.value = 'Проверить мои результаты'
   buttonElem.id = 'submit'

  console.log(mainElem);
  }
}

app.render();
