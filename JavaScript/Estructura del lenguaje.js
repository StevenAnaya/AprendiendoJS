
// VAMOS A EXPLICAR TODAS LAS PARTICULARIDADES DEL LENGUAJE JavaScript


// No es fuertemente tipado

// Variables primitrivas
var sacha = "Sacha"
sacha = 26
sacha = new Date()

// Variables de primer Orden
// Las funciones son ciudadanos de primer orden al igual que las variables
sacha = function saludar(){ alert('Hola')}

// Objetos

sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  edad: 26,
  saludar: function saludar(){
    alert(`Hola, me llamo ${this.nombre} ${this.apellido}`)
  }

// Constantes
const edad = 26

// Variables... muy variables
function saludar(){
  var nombre = "Sacha"
  alert(`Hola ${nombre}`)
}
// Aca se reduce al scope que tiene la funcion por eso cuando intentamos llamar la
// varible por fuera de la funcion no sale error Undifined
nombre //Undifined

function saludar(){
  nombre = "Sacha"
  alert(`Hola ${nombre}`)
}
// Aca la declaramos de forma global, lo que hacemos para usarla es usar window.nombre
nombre //Sacha
window.nombre === nombre //true

// Palabras Reservadas

break      delete    function     return     typeof
case       do        if           switch     var
catch      else      in           this       void
continue   false     instanceof   throw      while
debugger   finally   new          true       with
default    for       null         try
