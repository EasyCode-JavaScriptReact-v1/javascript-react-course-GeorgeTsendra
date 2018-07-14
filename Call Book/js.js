



// Приложение телефонный справочник
//
// Создайте функцию конструктор.
// У данной функции должны быть методы:
//
// 1 Преобразование телефонного номера из формата 0993378130 в (099) 33-78-130++
// 2 Проверка, что телефонный номер содержит только числа ++
// 3 Добавление пользователей в справочник ++
// 4 Удаление пользователя по имени, фамилии ++
// 5 Поиск пользователей по имени - отображает всех пользователей с одинаковым именем ++
// 6 Изменение имени, фамилии, телефонного номера у выбраного пользователя ++
// 7 Сортировка пользователей по номеру телефона, фамилии, имени и тд, по любому из свойств пользователя++
// 8 Фильтр по указанному свойству++





function PhoneApp() {
  this.dataBase = [
        {id:1, name:'Vasya',thername: "Ivanov",  numb: `(099)33-78-130`},
        {id:2, name:'Dima', thername: "Ivanov", numb: `(099)33-78-130`},
        {id:3, name:'Grisha', thername: "Ivanov", numb: `(099)33-78-130`},
        {id:4, name:'Jora', thername: "Ivanov", numb: `(099)33-78-130`},
        {id:5, name:'Jora', thername: "Ivanov", numb: `(099)33-78-130`},
    ]
}

PhoneApp.prototype.editUser = function(name,thername,numb) {
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

this.dataBase.push({id:correctId,name:name,thername:thername,numb:readyNumb}) // now it is not so long ;)
}



PhoneApp.prototype.usersRemovingByThernameAndName = function(username) {
  this.dataBase.forEach((value) => {
    if (value.name == username) {
      this.dataBase = this.dataBase.filter((value) => {
        return value.name != username
      })
    }
    if (value.thername == username) {
      this.dataBase = this.dataBase.filter((value) => {

        return value.thername != username
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

PhoneApp.prototype.changeUsers = function(userId, name, thername, numb) {
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
     this.dataBase[index] = {id:correctId,name:name,thername:thername,numb:readyNumb};// now it is not so long ;)
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

const myApp = new PhoneApp();
myApp.editUser(`Petiya`,`Petrov`, `0993378130`)
myApp.editUser(`Alex`,`Petrov`, `0093378130`)
// myApp.usersRemovingByThernameAndName('Petrov')



console.log(myApp);
