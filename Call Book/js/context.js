PhoneApp.prototype.createElement = function(value, key, index){
  let td = document.createElement('td');
  let rtById = document.getElementById(`tr_${index}`)
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


let createTh = (arr) => {
  const innerTr = arr.map(value =>
    `<td>${value}</td>`
  ).join('');
  return `<thead><tr>
    ${innerTr}
  </tr></thead>`
}


let buildHtmlTags = () => {
  // let body = document.body;
  let main = document.getElementById('app')

  main.innerHTML += `<header class="header">
		<div class="container top-radius">
			<h2>Contacts</h2>
		</div>
	</header>
  <main>
		<div class="container">
    <form class="form-inline search-form">
      <div class="form-group">
        <label class="sr-only" for="search">Search</label>
        <input type="text" class="form-control" id= "search" placeholder="Search">
      </div>
    </form>
    <table class="table table-hover contacts">

        ${createTh(['Name',"Last name", "Number"])}

      <tbody id="tbody_id">
      </tbody>
  </table>
    </div>
	</main>`
}


buildHtmlTags()
myApp.outputDataArray();
