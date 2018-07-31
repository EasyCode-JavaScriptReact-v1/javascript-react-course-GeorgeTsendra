/*
 TASK 0
 Отобразите всех лидеров массива.
 *
 *
 * Элемент лидер если он больше чем все последующие элементы
 * после него ( элементы справа ).
 * Последний элемент всегда лидер. Например в массиве [16,17,4,3,5,2]
 * лидеры 17, 5 и 2.
 *
 * */


  let result = [];
const solution = arr => {
  let arrStatic = [];
  let indexToSplice = 0
  //клонирую массив
  arr.forEach((value) => {
    arrStatic.push(value)})
  // сортирую оригинал
  let arrSorted = arr.sort((a, b) => {
    return a > b;})
  // из сортированного выбераю самый большой елемент
  let biggesrElem = arrSorted[arrSorted.length - 1]
  // из сортированного выбераю самый маленький елемент
  let minElem = arrStatic[arrStatic.length - 1]
  // добавляю в массив "лидера"
  result.push(biggesrElem)
  // ищу индекс самого большого
  arrStatic.forEach((elem, index, arr) => {
    if (biggesrElem == elem) {
      indexToSplice = index;}
  }, 0)
  // режу массив до самого большего елемента
  arrToSplice = arrStatic.splice(indexToSplice + 1, arrStatic.length);
  if (arrToSplice.length > 1) {
    //добавляю массив в рекурсивную функцию
    return solution(arrToSplice)
  } else {
    result.push(minElem)
    return result
  }
}
// console.log(solution([16, 17, 4, 3, 5, 2])); // === [17, 5, 2]
// console.log(solution([4, 3, 7, 12, 6, 67, 5, 45, 34, 35, 2, 8])); // [67, 45, 35, 8]
// console.log(solution([12, 10, 12, 8, 7, 6])); // [12, 8, 7, 6]
// console.log(solution([1, 2, 3, 4, 5, 4])); // [5, 4]
// console.log(solution([12, 12, 12]));



/* TASK 1
 * Сделайте карусель.
 * При клике по кнопке "<=" показывается предыдущее изображение по "=>" следующее.
 *
 * 1.1
 * Сделайте слайдер - бесконечным, после третьего изображения снова первое.
 * 1.2
 * Добавьте внизу цифры с текущим активным изображением.
 *
 @SUPER -> @front-end
 * Уберите в стилях li - position:absolute.
 * изменяйте свойство transform:translate 3d у .carousel, добавьте transition
 * и сделайте чтобы картинки передвигались влево и вправо
 *
 * @PUPER -> переход к первой картинкu
 *
 * */

// class Carousel {
//   constructor(options) {
//     this.prevBut =options.prevBut
//     this.nextBut =options.nextBut
//     this.img =options.img
//
//     this.i = options.i;
//   };
//   prevSlide() {
//     this.img[this.i].className = " ";
//     this.i--;
//     if (this.i <= 0) {
//       this.i = this.img.length - 1;
//     }
//     this.img[this.i].className = "active";
//   }
//   nextSlide() {
//     this.img[this.i].className = " ";
//     this.i++;
//     if (this.i >= 0) {
//       this.i = this.img.length - 1;
//     }
//     this.img[this.i].className = "active";
//   }
// }
/*создайте новый instance Carouse при вызове initialize*/
// var myInitializedCarousel = Carousel.initialize({
//   elementToApply: '.carousel',
//   infinity: true,
// });

// let mySlider = new Carousel({prevBut:document.querySelector(".slider .buttons .prev"),
//                             nextBut:document.querySelector(".slider .buttons .next"),
//                             img:document.querySelectorAll(".slider .photos img"),
//                             i: 0})


var prevBut = document.querySelector(".slider .buttons .prev");
var nextBut = document.querySelector(".slider .buttons .next");
var firstBut = document.querySelector(".slider .buttons .first");
var firImg = document.querySelector(".slider .photosList #el1");
var secImg = document.querySelector(".slider .photosList #el2");
var therImg = document.querySelector(".slider .photosList #el3");
var fourImg = document.querySelector(".slider .photosList #el4");
var fifImg = document.querySelector(".slider .photosList #el5");
var sixImg = document.querySelector(".slider .photosList #el6");
var sevImg = document.querySelector(".slider .photosList #el7");
var eigImg = document.querySelector(".slider .photosList #el8");
var img = document.querySelectorAll(".slider .photos img");
var i = 0;



prevBut.onclick = function() {
  img[i].className = " ";
  i--;
  if (i < 0) {
    i = img.length - 1;
  }
  img[i].className = "active";
}
nextBut.onclick = function() {
  img[i].className = " ";
  i++;
  if (i > img.length - 1) {
    i = 0;
  }
  img[i].className = "active";
}
firstBut.onclick = function() {
  for (var i = 0; i < img.length; i++) {
    if (i == 0) {
      img[i].className = "active";
    } else {
      img[i].className = " ";
    }
  }
}
firImg.onclick = function() {
  for (var i = 0; i < img.length; i++) {
    if (i == 0) {
      img[i].className = "active";
    } else {
      img[i].className = " ";
    }
  }
}
secImg.onclick = function() {
  for (var i = 0; i < img.length; i++) {
    if (i == 1) {
      img[i].className = "active";
    } else {
      img[i].className = " ";
    }
  }
}
therImg.onclick = function() {
  for (var i = 0; i < img.length; i++) {
    if (i == 2) {
      img[i].className = "active";
    } else {
      img[i].className = " ";
    }
  }
}
fourImg.onclick = function() {
  for (var i = 0; i < img.length; i++) {
    if (i == 3) {
      img[i].className = "active";
    } else {
      img[i].className = " ";
    }
  }
}
fifImg.onclick = function() {
  for (var i = 0; i < img.length; i++) {
    if (i == 4) {
      img[i].className = "active";
    } else {
      img[i].className = " ";
    }
  }
}
sixImg.onclick = function() {
  for (var i = 0; i < img.length; i++) {
    if (i == 5) {
      img[i].className = "active";
    } else {
      img[i].className = " ";
    }
  }
}
sevImg.onclick = function() {
  for (var i = 0; i < img.length; i++) {
    if (i == 6) {
      img[i].className = "active";
    } else {
      img[i].className = " ";
    }
  }
}
eigImg.onclick = function() {
  for (var i = 0; i < img.length; i++) {
    if (i == 7) {
      img[i].className = "active";
    } else {
      img[i].className = " ";
    }
  }
}

/*
* TASK 2
* Сделайте класс, который будет иметь метод topStyle
* метод topStyle принимает объект с CSS стилями и добавляет в <head>
*   новый элемент с данными стилями
*
*
* */

class styleInitiate {

  topStyle(newClass, newStyle){
    document.body.head.style.innerHTML += `.${newClass}{${newStyle};}`
  }
}

let elem = new styleInitiate()

elem.topStyle('fetch', { "background-color":'blue'})
/*
*
* <style>.fetch {
* background-color
* */

/* @SUPER
 *
 * Напишите функцию которая будет преобразовывать CSS-свойство в
 * ликвидное JS свойство
 *
 * background-color -> backgroundColor
 * margin-left -> marginLeft
 * flex-basis -> flexBasis
 *
 * ...etc
 *
 * сделать через regExp
 *
 * */
