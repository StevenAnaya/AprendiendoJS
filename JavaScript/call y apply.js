
// VAMOS A VER LA FUNCION DE CALL Y APPLY

const sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc'
}

// --------------------------------CALL-------------------
// Ahora lo que se quire hacer es que el contexto del this de la funcion apunte
// a los valores del objeto sacha y no a el contexto de la funcion

function saludar(veces) {
  for (let i = 0; i < veces; i++) {
    console.log(`Hola ${this.nombre} ${this.apellido}`);
    // Si no especificamos quien es this en la funcion el siempre va a buscar
    // el contexto global y tomara los valores que se encuentren en ese contexto
    // window
  }
}

// De esta forma hacemos un call() el cual nos hace el llamado a una funcion y
// le entrega un contexto y seguido enviamos los parametros que requiere la
// funcion
saludar.call(sacha,3)

// Otra forma de hacer el call puede ser esta usando la forma de los
// spread en los parametros
const params = [3, true]
saludar.call(sacha,...params)

// ------------------------------APPLY-------------------

function saludar(veces, uppercase) {
  let str = `Hola ${this.nombre} ${this.apellido}`
  str = uppercase ? str.toUpperCase() : str
  for (let i = 0; i < veces; i++) {
    console.log(str);
    // Si no especificamos quien es this en la funcion el siempre va a buscar
    // el contexto global y tomara los valores que se encuentren en ese contexto
    // window
  }
}
// Tambien podemos hacer esto usando el metodo apply(), este apply hace lo mismo que
// call, solo que en apply los parametros los encerramos con [,,] mientras que en
// call primero el contexto y separamos con "," los parametros
saludar.apply(sacha, [3, true])




window.nombre = "Sacha"

window.apellido ="Lifszyc"
