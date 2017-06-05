
// ACA ENTENDEMOS EL SCOPE DE LAS FUNCIONES EN JS

// Una variable declarada aqui tendria un scope global
// es decir cualquier funcion que este debajo de ella podria
// acceder a su valor
var nombre = "Steven"

// Si una funcion tiene como parametro el mismo nombre que una variable
// declarada de forma global, la funcion tomara primero el parametro o
// variable de forma local.
function saludar(nombre) {
  // Si no tenemos por parametro la variable pero la tenemos definida
  // dentro de igual forma el scope de esta variable se reduce a la funcion
  // y no tomaria la que esta definida de forma global

  // si dejamos la variable de la funcion sin var este tomara esa variable
  // como la variable global ya que JS no encontrara una declaracion de la
  // variable y se ira un scope mayor dandole la asignacion a la variable
  // global

  // nombre = "Eric"
  var nombre = "Eric"

  if (true) {
    // de igual forma si intentaramos acceder a la variable nombre, esta la sigue
    // tomando gracias a que se usa la declaracion var y queda con el scope de la
    // funcion, osea queda para toda la funcion
    var nombre = "Eric"
  }
  console.log(`Hola ${nombre}`);
}
saludar("Mario")
console.log(`La variable nombre tiene el valor ${nombre}`);

// -----------------------------------------------------------------------------------------

function saludar10(nombre) {
  for (var i = 0; i < 10 ; i++) {
    console.log(`Hola ${nombre}`);
  }
  console.log(`El valor de i es: ${i}`)
  // Cuando accedemos i desde cualquier parte de la funcion nos
  // mostrara el valor ya que declaramos con var y ese scope queda
  // definido para toda la funcion. A ESTO SE LE CONOCE COMO HOISTING


  // Ahora cuando declaramos con let las variables este reduce su scope a el
  // bloque de codigo en el que se ejecuta, entonces si intentamos acceder a esa
  // variable por fuera del codigo en donde se esta ejecutando, nos arrojara
  // error de undifined

  //  En lo mejor posible tratar de crear constantes const y no variables ya que nos 
  //  ahorran memoria ya que no cambian
  for (let j = 0; j < 10; j++) {
    console.log(`Hola ${nombre}`);
  }
  console.log(`El valor de i es: ${j}`)

}

saludar10("Steven")
