/*
 * TASK - 2
 *
 * Перепишите Homework 12 - TASK 1 используя class
 *
 * */

class HumanClass {
  constructor(args){
    this.name = args.name;
    this.age = args.age;
    this.sex = args.sex;
    this.hight = args.hight;
    this.weight = args.weight;
  }
}

class WorkerClass extends HumanClass{
  constructor(args){
    super(args);
    this.sallary = args.sallary;
    this.workPlace = args.keyshiya;
  }
  arbeiten(){
    console.log(`arbeite macht frie`);
  }
}
class StudentClass extends HumanClass{
  constructor(args){
    super(args);
    this.university = args.university;
    this.scholarship = args.scholarship;
  }
  lokkingTVseries(){
    console.log(`Say: Lannisters always pay their debts`);
  }
}

 let studentExemplar1 = new StudentClass({name:`Vasia`,age:`18`,sex:`man`,hight:165,weight:55,scholarship:`-1200`,university:`HPI`});
 let workerExemplar1 = new WorkerClass({name:`Vasia`,age:`18`,sex:`man`,hight:165,weight:55,sallary:`400$`,keyshiya:`somewhere`});
 let humanExample1 = new HumanClass({name:`Vasia`,age:`18`,sex:`man`,hight:165,weight:55});

console.log(humanExample1);
console.log(workerExemplar1);
console.log(studentExemplar1);
/*
 * Вы должны создать имитацию медленной базы данных.
 * TASK - 1 Сделайте Класс Database с методами
 *
 *  query
 *
 *  При запуске метода query запустите внутренний таймаут, который будет длиться 5 секунд.
 *  При поступлении еще 1 запроса(если вызвать метод еще раз),
 *  таймаут должен стартануть сначала
 *  и ответ должен прийти снова через 5 секунд
 *
 * */

class DataBase {
  constructor(){
    this.counter = 0;

  };

  query(){
  clearInterval(this.counter);
    this.counter ++;
    // console.log(this.counter);
    let count = 5;
      let x = setInterval(()=>{
      console.log(count);
      count --;
      if (count < 1) {
        console.log('The web server is down');
        clearInterval(x);
      }
    },1000);


  }

}




const dataBase = new DataBase();
dataBase.query();




// // 5
// // 4
// // 3
// // 2
// // 1
// // console.log('The web server is down') https://www.youtube.com/watch?v=W8_Kfjo3VjU

// dataBase.query();
// // 5
// // 4
// dataBase.query();
// // 5
// // 4
// // 3
// // 2
// dataBase.query();
// 5
// 4
// 3
// 2
// 1
// console.log('The web server is down')
