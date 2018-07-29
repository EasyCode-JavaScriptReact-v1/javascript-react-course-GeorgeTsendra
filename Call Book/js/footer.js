let createNav = (classes, context, bull) => {

  if (bull) {
    return ` <span class="${classes} aria-hidden="${bull}"">${context}</span>`
  }else {
    return ` <span class="${classes}">${context}</span>`
  }

}

let footerOutput = ()=>{

  let main = document.getElementById('app')

  main.innerHTML += `<footer class="footer">
    <div class="container bottom-radius">
      <nav class="main-nav">
        <a href="index.html" class="tab active">
          ${createNav("glyphicon glyphicon-search", ``,`true`)}
          ${createNav("tab-text", `Context`)}
        </a>
        <a href="keypad.html" class="tab">

            ${createNav("glyphicon glyphicon-th", ``,`true`)}
            ${createNav("tab-text", `Keypad`)}
        </a>
        <a href="edit-contact.html" class="tab">

          ${createNav("glyphicon glyphicon-pencil", ``,`true`)}
          ${createNav("tab-text", `Edit contact`)}
        </a>
        <a href="user.html" class="tab">

          ${createNav("glyphicon glyphicon-user", ``,`true`)}
          ${createNav("tab-text", `User`)}
        </a>
        <a href="add-user.html" class="tab">
          ${createNav("glyphicon glyphicon-plus", ``,`true`)}
          ${createNav("tab-text", `Add user`)}
        </a>
      </nav>
    </div>
  </footer>`
}

footerOutput()
