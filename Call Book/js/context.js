
class Context {
  constructor() {

    this.dataBase = [{
      id: 1,
      name: 'Vasya',
      surname: "Ivanov",
      numb: `(099)33-78-130`
    },
    {
      id: 2,
      name: 'Dima',
      surname: "Petrov",
      numb: `(099)33-78-130`
    },
    {
      id: 3,
      name: 'Grisha',
      surname: "Adianow",
      numb: `(099)33-78-130`
    },
    {
      id: 4,
      name: 'Jora',
      surname: "Shewshenko",
      numb: `(099)33-78-130`
    },
    {
      id: 5,
      name: 'Jora',
      surname: "Ivanov",
      numb: `(099)33-78-130`
    },
  ]
  }




  createTh(arr){
    const innerTr = arr.map(value =>
      `<td OnClick = "myContext.sortUsers('${value}')">${value}</td>`
    ).join('');
    return `<thead><tr>
      ${innerTr}
    </tr></thead>`
  }


  buildHtmlTags (){
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

          ${this.createTh(['name','surname', 'number'])}

        <tbody id="tbody_id">
        </tbody>
    </table>
      </div>
  	</main>`
    this.outputDataArray(this.dataBase)
  }

  createElement (value, key, index){
    let td = document.createElement('td');
    let rtById = document.getElementById(`tr_${index}`)
    rtById.appendChild(td)
    td.textContent = value[key]
  }

  outputDataArray(options) {
    let tabelBody = document.getElementById("tbody_id")
    options.forEach((value, index, arr) => {
      let tr = document.createElement('tr')
      tr.setAttribute('id', `tr_${index}`);
      tabelBody.appendChild(tr);
          this.createElement(value, 'name', index)
          this.createElement(value, 'surname', index)
          this.createElement(value, 'numb', index)
        })
  }

  sortUsers(property){

      var newArray = this.dataBase.sort((a, b) => {
        return a[property] == b[property] ? 0 : a[property] < b[property] ? -1 : 1;
      })
      let tabelBody = document.getElementById("tbody_id")
      tabelBody.innerHTML = "";
      return   this.outputDataArray(newArray)
  }
}


let myContext = new Context();
myContext.buildHtmlTags()
