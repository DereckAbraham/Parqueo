let contenido_DOM = document.querySelector(".contenido");

let contenido = `
    <div class="caja_img">
        <div class="item">
            <h3>Bus y Transporte Pesado</h3>
            <span>🚌</span>
        </div>
         <div class="item">
            <h3>SUV</h3>
            <span>🚙</span>
        </div>
        <div class="item">
            <h3>Sedanes</h3>
            <span>🚗</span>
        </div>
        <div class="item">
            <h3>Motos</h3>
            <span>🏍️</span>
        </div>
        <div class="item">
            <h3>Otros</h3>
            <span>🛺</span>
        </div>
    </div>
    <form>
        <input type="texto" class="placa">
        <input type="time" class="tiempo_entrada">
        <button>Ingresar</button>
    </form>

`;

contenido_DOM.innerHTML = contenido;