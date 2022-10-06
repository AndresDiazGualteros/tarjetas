let añadir = document.querySelector(".añadir");
añadir.addEventListener("click", añadirTarjeta);
let contenedor=document.getElementById('contendorTerjetas')
let tarjeta = document.getElementById("tarjeta")
let acum = 1;
function añadirTarjeta(){
    contenedor.innerHTML += `  <div class="tarjeta" id"tarjeta" >
    <h2 class="tituloTarjeta">Modelo${acum++}</h2>
    <p class="textoParrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis, voluptas dolorum pariatur fugiat maiores?</p>
    <button class="quitar" id="quitar" onclick="eleminar(this)">DALATE</button>
</div>`
    let quitar = document.getElementById("quitar");
    quitar.addEventListener("click", eliminar)

}
function eleminar(valor){
    valor.parentNode.parentNode.removeChild(valor.parentNode)
}