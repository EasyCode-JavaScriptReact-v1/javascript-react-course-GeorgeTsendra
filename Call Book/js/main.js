/*
Виртуализировать таблицу, сделать рендер всей
таблицы через JavaScript.
Второй макет.
https://github.com/aleksandra-maslennikova/telephone-book/blob/master/index.html
Выглядеть должно так же: https://aleksandra-maslennikova.github.io/telephone-book/index.html
*/

function PhoneApp() {
  this.dataBase = [
        {id:1, name:'Vasya',surname: "Ivanov",  numb: `(099)33-78-130`},
        {id:2, name:'Dima', surname: "Ivanov", numb: `(099)33-78-130`},
        {id:3, name:'Grisha', surname: "Ivanov", numb: `(099)33-78-130`},
        {id:4, name:'Jora', surname: "Ivanov", numb: `(099)33-78-130`},
        {id:5, name:'Jora', surname: "Ivanov", numb: `(099)33-78-130`},
    ]
}

PhoneApp.prototype.editUser = function(name,surname,numb) {
 // проверяем длину номера
  if (numb.length > 10) {
    console.error(`make correct numb`);
  }
// проверяем содержимое
  for (var i = 0; i < numb.length; i++) {
    var newNumb = +numb[i];
    if (typeof newNumb != `number` || typeof newNumb == `NaN`) {
      console.error(`not correct numb`);
      continue;
    }
  }
// формируем корректный формат
let firstThreeNumb = `${numb[0]}${numb[1]}${numb[2]}`;
let secondTwoNumb = `${numb[3]}${numb[4]}`;
let therdTwoNumb = `${numb[5]}${numb[6]}`;
let fourthThreeNumb = `${numb[7]}${numb[8]}${numb[9]}`;
let readyNumb = `(${firstThreeNumb})${secondTwoNumb}-${therdTwoNumb}-${fourthThreeNumb}`;
//формируем ID по длине массива + 1
let correctId = this.dataBase.length+1;

this.dataBase.push({id:correctId,name:name,surname:surname,numb:readyNumb}) // now it is not so long ;)
}



PhoneApp.prototype.usersRemovingBySurnameAndName = function(username) {
  this.dataBase.forEach((value) => {
    if (value.name == username) {
      this.dataBase = this.dataBase.filter((value) => {
        return value.name != username
      })
    }
    if (value.surname == username) {
      this.dataBase = this.dataBase.filter((value) => {

        return value.surname != username
      })
    }
  })
}

PhoneApp.prototype.searchUsers = function(username) {
  let allUsers = [];
  this.dataBase.forEach((value, index, arr)=> {

    if (value.name === username) {
      allUsers.push(this.dataBase[index]);

    }
  })
  console.log(allUsers);
}

PhoneApp.prototype.changeUsers = function(userId, name, surname, numb) {
  // проверяем длину номера
   if (numb.length > 10) {
     console.error(`make correct numb`);
   }
 // проверяем содержимое
   for (var i = 0; i < numb.length; i++) {
     var newNumb = +numb[i];
     if (typeof newNumb != `number` || typeof newNumb == `NaN`) {
       console.error(`not correct numb`);
       continue;
     }
   }
 // формируем корректный формат
 let firstThreeNumb = `${numb[0]}${numb[1]}${numb[2]}`;
 let secondTwoNumb = `${numb[3]}${numb[4]}`;
 let therdTwoNumb = `${numb[5]}${numb[6]}`;
 let fourthThreeNumb = `${numb[7]}${numb[8]}${numb[9]}`;
 let readyNumb = `(${firstThreeNumb})${secondTwoNumb}-${therdTwoNumb}-${fourthThreeNumb}`;

 this.dataBase.forEach((value, index, arr)=> {
   let correctId = index + 1;
   if (value.id == userId) {
     this.dataBase[index] = {id:correctId,name:name,surname:surname,numb:readyNumb};
   };
 });
}

PhoneApp.prototype.sortUsers = function(property) {

  console.log(property);
  var newArray = this.dataBase.sort((a, b) => {
    return a[property] == b[property] ? 0 : a[property] < b[property] ? -1 : 1;})


  console.log(newArray);
}
PhoneApp.prototype.filterUsers = function(property) {
  let filteredArray = []
     this.dataBase.filter((value,index,arr)=>{
      filteredArray.push(`${property}: ${value[property]}`);
  })
  console.log(filteredArray);
}

PhoneApp.prototype.createElement = function(value, key, index){
  let td = document.createElement('td');
  let rtById = document.getElementById(`tr_${index}`)
  // let rtById = document.querySelectorAll(tagname = "tr")
  rtById.appendChild(td)
  td.textContent = value[key]
}

PhoneApp.prototype.outputDataArray = function() {
  let tabelBody = document.getElementById("tbody_id")
  this.dataBase.forEach((value, index, arr) => {
    let tr = document.createElement('tr')
    tr.setAttribute('id', `tr_${index}`);
    tabelBody.appendChild(tr);
        this.createElement(value, 'name', index)
        this.createElement(value, 'surname', index)
        this.createElement(value, 'numb', index)
      })
}

const myApp = new PhoneApp();
myApp.editUser(`Petiya`,`Petrov`, `0993378130`)
myApp.editUser(`Alex`,`Petrov`, `0093378130`)
myApp.editUser(`Petiya`,`Petrov`, `0993378130`)
myApp.outputDataArray();




console.log(myApp);
