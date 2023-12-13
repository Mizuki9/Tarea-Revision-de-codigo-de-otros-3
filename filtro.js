// Cambié el comentario de abajo para que diga "lista", completa la palabra

// Tenemos una lista de productos

// Cambié los nombres de las imágenes para que digan "tacon", completa la palabra
// Agregué en la sección de colores "negro y negra" y "rojo y roja" en caso de que las personas busquen en femenino o masculino el color
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro, negra", img: "./tacon-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./tacon-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro, negra", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo, roja", img: "./zapato-rojo.jpg"}
]

// Cambié el nombre de las variables para que sean más claras de qué contienen

// Cambié el .getElementsByName por un .getElementById porque la referencia es de un ID (y agregué un ; )
const htmlListReference = document.getElementById("lista-de-productos");

// Removí el . de .input porque no es una clase
const htmlSearchBarReference = document.querySelector('input');

function displayProductos() {
  for (let i = 0; i < productos.length; i++) {
    // Agregué varios ;
    // Cambié var por const y también el nombre de la variable para que sea más clara
    const htmlNewDiv = document.createElement("div");
    htmlNewDiv.classList.add("producto");
  
    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productos[i].nombre;
    
    const imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);
  
    htmlNewDiv.appendChild(ti);
    htmlNewDiv.appendChild(imagen);
  
    htmlListReference.appendChild(htmlNewDiv);
  }
}

/* Asumo que displayProductos es como se debería de llamar el código de arriba, así que lo hice una función para que esta línea tuviese sentido */
displayProductos(productos);

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (htmlListReference.firstChild) {
    htmlListReference.removeChild(htmlListReference.firstChild);
  }

  const texto = htmlSearchBarReference.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  // A pesar de que considero que la siguiente sección del código podría mejorar en cuanto a nombres de variables, no lo cambié ya que funciona tal cual está. Sólo sí reemplazé los var por const porque eso puede causar problemas.
  for (let i = 0; i < productosFiltrados.length; i++) {
    const d = document.createElement("div")
    d.classList.add("producto")
  
    const ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    const imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    htmlListReference.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  