// Отобразите достаточно ли у developers навыков ?
// Отобразите всех разработчиков и вызовете у каждого
// разработчика метод goodDev --

/*
 * Количество требований к разработчику совпадает с его навыками.
 * Используйте в задаче this
 * */

let developer1 = {
  skills: ['JavaScript', 'linux', 'html', 'OOP', 'Node.js', ],
  requirements: ['Node.js', 'JavaScript', 'OOP' ],
  goodDev: goodDev
};

let developer2 = {
  experience: [
    {
      technology: 'java'
    },
    {
      technology: 'c++'
    },
    {
      technology: 'aws'
    },
    {
      technology: 'docker'
    }
  ],
  requirements: ['java', 'json', 'c++', 'JavaScript'],
  goodDev: goodDev
};
//ver1
function goodDev(dev) {
  diff = function(a1, a2) {
    return a1.filter(i => !a2.includes(i))
      .concat(a2.filter(i => !a1.includes(i)))
  }

  let newAraySkills = [];
  if (this.skills) {
    newAraySkills = this.skills;
  }
  if (this.experience) {

    for (var i = 0; i < this.experience.length; i++) {
      newAraySkills.push(this.experience[i].technology)
    }

  }
  let newArayRequirements = this.requirements;
  let diffResult = diff(newAraySkills, newArayRequirements );
  let newArayInCommon = [];

  newArayRequirements.forEach((value) => {
    cache = value;
    count = 0;
    newAraySkills.forEach((value) => {
      if (cache == value) {
        newArayInCommon.push(value);
        console.log(`required: ${value} ... success`);
        count = 1;
      }
    })
    if (count == 0) {
      console.log(`required: ${cache} ... fail`);
    }
  })



  // console.log(`Требования: ${newArayRequirements}`);
  // console.log(`навыки: ${newAraySkills}`);
  // console.log(`то, что общее: ${newArayInCommon}`);
  // console.log(`то, что не общее: ${diffResult}`);

}

developer1.goodDev()
developer2.goodDev()
// developer 1
// required: Node.js ... success
// required: JavaScript ... success
// required: OOP ... success
// ---

// developer 2
// required: json ... fail
// required: JavaScript ... fail
// required: Java ... success
// required: OOP ... success

/*
 *
 * TASK 2
 * Напишите функцию принимает 1 аргумент сортирует объект по
 * переданному значению (например age или name)
 *
 * При вызове функции используйте this
 *
 * */

let myObject = {
  database: [{
      age: 100,
      name: 'b'
    },
    {
      age: 15,
      name: 'c'
    },
    {
      age: 25,
      name: 'a'
    }
  ]
};

// Version 3
// Не работает корректно !!!!

myObject.myFilter = function(param) {
  let count = 3;
  this.database.forEach(function(value, index, arr) {
    if (typeof value[param] == "number") {
      count++;
    };
    if (typeof value[param] == "string") {
      count--;
    };
  });
  // console.log(count);

  if (count === 6) {
    return this.database.sort((dataObj1, dataObj2) => dataObj1[param] < dataObj2[param])
  }
  if (count === 0) {
    return this.database.sort(function(a, b) {
      if (a[param] > b[param]) return -1;
      if (a[param] > b[param]) return 1;
      return 0
    })
  }
};


// {age:15, name:'c'}, {age:25, name:'a'} {age:100, name:'b'}
console.log(myObject.myFilter('age'));

// {age:25, name:a}, {age:100, name: b}, {age:15, name:'c'}
console.log(myObject.myFilter('name'));



/*
 * TASK 3
 *
 * Перепишите homework 5 с использованием методов массивов и
 * => arrow functions
 * Done
 */


/*
 *
 * SUPER TASK 1
 * Напишите функцию которая принимает 3 аргумента:*
 *
 *  - объект к которому привязывается метод
 *  - Имя свойства с которым связывается метод
 *  - Объявление привязываемого метода( функция )
 *
 *  Если количество аргументов у функции fn совпадает с переданными
 *  параметрами тогда сохраняет метод в замыкании
 *  и привязывает функцию к методу объекта
 *
 *  при вызове одного и того же метода с разным количеством аргументов,
 *  должно давать различный результат
 *
 * */

let junior = {};

// fn.length == arguments.length

function addMethod(object, name, fn) {

}

addMethod(junior, 'ok', function() {
  console.log('zero arguments');
});
addMethod(junior, 'ok', function(one) {
  console.log('one arguments');
});
addMethod(junior, 'ok', function(one, two) {
  console.log('two arguments');
});
addMethod(junior, 'ok', function(one, two, three) {
  console.log('three arguments');
});

// junior.ok(1, 2, 3); // 'three arguments'
// junior.ok(1, 2); // 'two arguments'
// junior.ok(1); //'one arguments'
// junior.ok(); //'zero arguments'
