
class Keypad {
  constructor (options){

  }

  outputNumb(value){
    let numb = document.getElementById("numberInput")
      numb.innerHTML += value;
  }

  glyphicon(){
    let numb = document.getElementById("numberInput")
    numb.innerHTML = "";
  }

  numberAdd(arr){

    let numbArr = arr.map( value =>
      `<button class="key" OnClick=" myKeyad.outputNumb(${value}) ">${value}</button>`
    ).join("")

    return `<div class="keypad-holder"> ${numbArr}
    <button class="key"> <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></button>
     </div> `
  }


  addUserPageOutput() {
    let main = document.getElementById('app')

    main.innerHTML += `<header class="header">
  		<div class="container top-radius">
  			<h2>Keypad</h2>
  		</div>
  	</header>
  	<main class="main">
  		<div class="container">
  			<div class="number">
  				<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
  				<span id="numberInput" class ="numbers"></span>
  				<span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true" OnClick="myKeyad.glyphicon()"></span>
  			</div>
        ${this.numberAdd(['1','2','3','4','5','6','7','8','9'," \* " ,'0',"\#" ])}

  		</div>
  	</main>`
  }
}

let myKeyad = new Keypad();
myKeyad.addUserPageOutput()
