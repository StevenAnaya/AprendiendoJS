// ACA VAMOS A REALIZAR OPERACIONES CON ARRAYS Y A VER LOS CLOSURE DE LAS VARIABLES
// EJ EL MOMENTO EN EL QUE SON LLAMADAS

// Aca ponemos operador Spread (...Nombre), esto lo que hace es que podemos recibir
// parametros que no se han defenido, ejemplo en el primer llamado podemos enviar
// 5 parametros y el nos retorna un  array con los 5 parametros, luego podemos volver
// a llamar la funcion pero esta vez le pasamos solo 2 parametros, el recibe esos dos
// parametros y nos retorna un array con esos 2 parametros; Es ideal cuando una funcion
// recibe parametros que varian en su cantidad
function suma(...numeros) {
  // para realizar operaciones con el array que nos devuelve la funcion podemos hacerlo
  // de la forma facil:
  let acum = 0
  for (let i = 0; i < numeros.length; i++) {
    acum += numeros[i]
  }
  return acum
}



// -------------ACA VAMOS A HACER LA OPERACION DEL ARRAY DE LA FORMA CORRECTA


function suma(...numeros){
  // Hacemos el llamado al metodo .reduce() que es para los arrays, que lo que hace
  // es crear un acumulador y recibir como parametro, el numero que queremos que vaya
  // acumulando; Esto seria asi:
  return numeros.reduce(function (acum, numero) {
    // Luego le decimos que nos acumule el numero que pasamos por parametro
    // y por ultimo que nos retorne el acumulado de esos numeros
    acum += numero
    return acum
  })
}


// ----------------------FUNCION PARA TENER EL DOBLE DEL VALOR DE LOS NUMEROS

function dobles(...numeros) {
// Usamos la funcion de los arrays .map() que lo que hace es recibir una funcion como
// parametro y ejecutarla por cada uno de los elementos del array.

// EL RESULTADO QUE RETORNA ESTE METODO NO LO HACE SOBRE EL ARRAY PRINCIPAL, EL METODO
// CREA UN NUEVO ARRAY CON LOS RESULTADOS, ENTONCES LO QUE SE HACE ES GUARDAR ESE ARRAY
// EN UNA VARIABLE

// const resultado = numeros.map(function (numero) {
//   return numero * 2
// })

// O TAMBIEN PODEMOS RETORNAR EL RESULTADO DE ESA FUNCION
  // return numeros.map(function (numero){
  //   return numero * 2
  // })

// Todos esto tambien lo podemos hacer con arrow function, seria asi:

  const dobles = (...numeros) => numeros.map(numero => numero * 2)


}

// ----------------------------METODO FILTER

// CON ESTA FUNCION PODEMOS FILTRAR CIERTOS VALORES DE UN ARRAY

// Este metodo recibe como parametro una funcion que se ejecutara por cada uno de
// los elementos del array
//
// Esa funcion que recibe como parametro retorna un true/false segun el numero que recibe
// como parametro la funcion interna que es la que evalua el filtro, luego .filter()
// retorna un array con el resultado
function pares (...numeros){

  numeros.filter(function (numero) {
    return numero % 2 == 0
  })
}

// Escrita en arrow functions
const pares = (...numeros) => numeros.filter(numero => numero % 2 == 0)

suma(4, 8 , 12, 8954, 7)
