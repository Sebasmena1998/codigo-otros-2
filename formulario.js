
//Crea la variable formulario que llama con un querySelector al primer "form" que se encuentra en el html.
var formulario = document.querySelector("form") //Correccion de la llamada del formulario eliminando el "#" porque ese es para id. y esto crea un array del form 

//evita que si ciertas condiciones no sean cumplidad formulario no se envie y lo iguala a la funcion que no tiene nombre entonces le ponemos el nombre plantilla por ahora
formulario.onsubmit = function plantilla(e) { //la funcion tiene el parametro e se ocupa para decir que es un evento

  e.preventDefault(); //falto completar el preventDefault

  //Le asigna el valor de los inputs a unas variables
  var n = formulario.elements[0] //el array 0 es el nombre
  var a = formulario.elements[1] // este es la edad pero como e es ocupada arriba para un evento cambiamos la variable por una a de age
  var na = formulario.elements[2] // este es la nacionalidad

  //re asigna el valor pasado a unas nuevas variables
  var nombre = n.value
  var edad = a.value


  //asigna la eleccion de la nacionalidad como un valor segun la opcion
  var i = na.selectedIndex

  //La nacionalidad escogida se asigna a una variable llamada nacionalidad
  var nacionalidad = na.options[i].value

  //muestra en consola las variables
  console.log(nombre, edad);
  console.log(nacionalidad);

  //pone condicionales sobre los requisitos

  //si la longitud nombre es exactamente igual a 0
  if (nombre.length === 0) {
    n.classList.add("error")
  }
  //Si edad es menor de 18 o mayor de 120 marca error
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }
  //Si la longitud es mayor a 0 y la edad esta en el rango llama a la funcion agregar invitado
  if (nombre.length > 0
    && (edad > 18
      && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad)
  }
}
/* Segmento innecesario para el correcto funcionamiento
//crea la variable boton borrar que es un elemento boton, que tiene un texto adentro del boton y se le asgino un id.  Variable inecesaria
// var botonBorrar = document.createElement("button")
// botonBorrar.textContent = "Eliminar invitado"
// botonBorrar.id = "boton-borrar"

//Crea una variable para crear un salto de linea
// var corteLinea = document.createElement("br")

// //Hace que con un appendchild se pona un salto de linea y el boton "eliminar invitado" se pongan al final del body
// document.body.appendChild(corteLinea)
// document.body.appendChild(botonBorrar);
*/


//Crea la funcion agregar invitado con los parametros de nombre, edad y nacionalidad
function agregarInvitado(nombre, edad, nacionalidad) {

  //crea un condicional sobre la nacionalidad
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  //Crea la variable lista donde llama por id "lista-de-invitados" la cual no existe en el html
  var lista = document.getElementById("lista-de-invitados")

  //Crea una variable que crea un "div"
  var elementoLista = document.createElement("div")

  //a la variable anterior le agrega la clase lista "elemento-lista", error en sintaxis added en vez de add
  elementoLista.classList.add("elemento-lista")
  //y la pone al final de lista con el appendChild
  lista.appendChild(elementoLista)

  // //Crea unas variable para hacer un span, un input y un salto de linea.  Variables inecesarias
  // var spanNombre = document.createElement("span")
  // var inputNombre = document.createElement("input")
  // var espacio = document.createElement("br") //Variable re
  // //eliminamos este nombre para no tener el valor repetido
  // spanNombre.textContent = "Nombre 2: "
  // inputNombre.value = nombre
  // elementoLista.appendChild(spanNombre)
  // elementoLista.appendChild(inputNombre)
  // elementoLista.appendChild(espacio)


  //crea una funcion adentro de otra función: funcion repetida?
  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span")
    var inputNombre = document.createElement("input")
    var espacio = document.createElement("br")
    spanNombre.textContent = descripcion + ": "
    inputNombre.value = valor
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)


  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  var corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
}
