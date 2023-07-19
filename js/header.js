//Localizar el nodo en el DOM
//nodo:  Etiqueta en su archivo .html

let header_del_DOM = document.querySelector(".header");

//Almacenar en una variable el contenido a agregar
let header = `
<div class = "contenedor">
<img src="./img/park.png">
<p>Titulo del Header</p>
<nav>
    <ul class ="tipos">
        <li>Transporte Pesado</li>
        <li>SUV</li>
        <li>Sedanes</li>
        <li>Motocicletas</li>
        <li>Otros</li>
    </ul>
</nav>
 </div>
`;

//Agregar el contenido a la referecia del DOM
header_del_DOM.innerHTML = header;
