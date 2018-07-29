let numberAdd = arr =>{

  let numbArr = arr.map(value =>
    `<button class="key">${value}</button>`
  ).join("")

  return `<div class="keypad-holder"> ${numbArr} </div> `
}




let addUserPageOutput = () => {
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
				<span class ="numbers">(050)5005050</span>
				<span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>
			</div>
      ${numberAdd(['1','2','3','4','5','6','7','8','9','*','0','#'])}

		</div>
	</main>`}

addUserPageOutput()
