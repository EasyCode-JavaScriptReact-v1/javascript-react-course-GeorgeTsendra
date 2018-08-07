
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
    {
      id: 6,
      name: 'Dima',
      surname: "Dimonov",
      numb: `(099)33-78-130`
    }
  ]
  }

  searchUsers(username) {
    let allUsers = [];
    this.dataBase.forEach((value, index, arr)=> {

      if (value.name == username) {
        allUsers.push(this.dataBase[index]);

      }
    })

    this.dataBase = allUsers
    this.buildHtmlTags()
    return this.dataBase
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
    main.innerHTML = `<header class="header">
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


    let formToSearch = document.querySelector(".form-control")

    window.addEventListener("keydown", e => {

      if (e.keyCode == 13) {
        this.searchUsers(`${formToSearch.value}`)
      }
      // console.log(`${formToSearch.value}`);
    })
    this.checkUser()
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
      tr.setAttribute('class', `tr_class`);
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

  checkUser(){
    let allTr = document.querySelectorAll(".tr_class")
    allTr.forEach((tr, index, arr)=>{
      tr.addEventListener("click", a =>{
        let allTd = tr.querySelectorAll("td")
        
        let innerTdName = allTd[0].innerHTML
        let innerTdSurname = allTd[1].innerHTML
        let innerTdNumber = allTd[2].innerHTML

        console.log(innerTdName);
        console.log(innerTdSurname);
        console.log(innerTdNumber);

      })
    })


  }




}


let myContext = new Context();
myContext.buildHtmlTags()
