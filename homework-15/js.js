/*
TASK 0
Проверьте что строка содержит все символы от "a" до "z"
  solution("wyyga") // false
  solution("qwertyuioplkjhgfdsazxcvbnm") // true
  solution("ejuxggfsts") // false
  solution("qpwoeirutyalskdjfhgmznxbcv") // true
  solution("qqqqqqqqpwoeirutyallskkdjfhgmmznxbcv") // true
  solution("0123456789abcdefghijklmnop") // false
*/



const solution = str => {
  let  abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  let strSplit = str.split('');
  let count = 0;

  strSplit.forEach((value, index, arr)=>{
    let strSplitValue = value;
    abc.forEach((value, index, arr)=>{

      if (strSplitValue == value) {
        count ++;
        delete arr[index];
      }
    })

  });

  if (count == 26) {
    return true;
  }else {
    return false;
  }
};
console.log(solution("wyyga")); // false
console.log(solution("qwertyuioplkjhgfdsazxcvbnm")); // true
console.log(solution("ejuxggfsts")); // false
console.log(solution("qpwoeirutyalskdjfhgmznxbcv")); // true
console.log(solution("qqqqqqqqpwoeirutyallskkdjfhgmmznxbcv")); // true
console.log(solution("0123456789abcdefghijklmnop")); // false
/*
 2. Напишите функция которая преобразовывает / открывает
 скобки всех вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество
 внутренних массивов и объектов
 example:
 [[1,2],[3,[4]],5, 10] => [1, 2, 3, 4, 5, 10]
 [25, 10, [10, [15]]] => [25, 10, 10, 15]
 [1, [2, [ {a: "b", c: 'd' }, { c: [1, 2, 5] } ] ] ] => [1, 2, {a: "b"}]
 */

//#1 arr == [...] flattenedArray = [1] + flatten = [2, [{a: "b"}, { c: 'd' }]]
//#2 arr == [2, [ {a: "b"}, { c: 'd' } ] ] flattenedArray = [2] + flatten == [{a: "b"}, { c: 'd' }]
//#3 arr == [ {a: "b"}, { c: 'd' } ] flattenedArray = [{a: "b"}, { c: 'd' }]
//#

const flatten = arr => {


  return arr.reduce((newArr, value, index, arr)=>{

    return Array.isArray(value)
      ? newArr.concat(flatten(value))
      : newArr.concat(value)

  },[])
};


console.log(flatten([[1,2],[3,[4]],5, 10]))

/*
Виртуализировать таблицу, сделать рендер всей
таблицы через JavaScript.
Второй макет.
https://github.com/aleksandra-maslennikova/telephone-book/blob/master/index.html
Выглядеть должно так же: https://aleksandra-maslennikova.github.io/telephone-book/index.html
*/
