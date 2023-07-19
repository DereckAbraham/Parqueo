let footer_del_DOM =  document.querySelector(".footer");

let footer = `
    <div class="bajo">
        <span>@dacarranza</span>
        <a href="https://github.com/DereckAbraham?tab=repositories">
        <img  class="github" src="./img/github.png">
        </a>
    </div>
`

footer_del_DOM.innerHTML = footer;