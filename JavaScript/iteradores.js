
// AHORA VAMOS A HABLAR DE LOS ITERADORES EN JAVASCRIPT

// Los iteradores no permitiran hacer listas infinitas de elementos haciendolos
// distintos a los arreglos (arrays) los cuales tienen un numero finito de elementos
// definidos

// next() - iterara los datos
// value - nos devolvera el valor del dato
// done - sera un indicador para cuando la lista se haya terminado

// Con iteradores es muy sencillo realizar un for y obtener los datos

// for(let value of fibo){
//   console.log(value);
// }


function fibonacci() {
  let a = 0, b = 1
  // Aca devolvemos un objeto
  return{
    // Todos los iteradores en JS tienen que tener un atributo next que else {
    // una funcion que nos debe retornar un atributo value, y un atributo done(true/false)
      next: function () {
        // y esta funcion de next nos deben devolver un objeto con el valor que queremos
        // calcular y el atributo done que indica si la lista ya termino
        let f = a
        a = b
        b = f + b

        return {value: f, done: false}
      }
    }
  }
}

const fibo = {}
// Si nos referimos con los [] estamos haciendo referencia a las propiedades del
// objeto, por ejemplo fibo{nombre: 'Steve'} fibo['nombre'], este nos trae el nombre
// Steve

// Para hacer que esto lo interprete JS como un iterador y se pueda usar en un ciclo
// for. Colocamos la palabra Symbol.iterator

fibo[Symbol.iterator] = fibonacci

// next tiene dos valores que seran, el valor(value) y el done que nos indica si
// el iterador ya ha terminado, este se indica con un true/false
// fibo.next().value //0
// fibo.next().value //1
// fibo.next().value //1
// fibo.next().value //2
// fibo.next().value //3
// fibo.next().value //5
// fibo.next().value //8
// fibo.next().value //13
// fibo.next().value //21


let i = 0
for (let value of fibo){
  console.log(value);
  i++
  // Le colocamos el break por que es un ciclo infinito si no lo ponemos
  if ( i > 20) break
}


// AHORA VAMOS A HABLAR DE LOS GENERADORES EN JS QUE SON ALGO SIMILARES A ESTOS
