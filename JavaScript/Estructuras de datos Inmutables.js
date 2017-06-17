
// ACA VEREMOS COMO FUNCOINAN LAS ESTRUCTURAS DE DATOS INMUTABLES

 // Vamos a ver algo muy importante para la programacion funcional en JS, y es
 // la inmutabilidad de los objetos

// El operador === nos ayuda a comparar objetos, ejecutando la comparacion no
// directamente a los datos del objeto sino, a la referencia del objeto.
//
// Cuando asignamos un objeto a otro estamos haciendo que ambos apunten a la misma
// referencia, por eso a modificar un objeto el otro tambien se vera afectado, por
// que ambos tienen la misma referencia de memoria.
//
// la inmutabilidad tiene por objetivo hacer que los parametros de un objeto sean no
// modificables o inmutables.

let steven = { nombre: 'Steven', apellido: 'Anaya', edad: 20}

let otroSteven = steven

// Le asignamos a otroSteven el objeto steven, ahora vamos a cambiar en el objeto
// otroSteven la edad.

otroSteven.edad = 22

// este nos cambia la edad en el objeto otroSteven y en el objeto steven, esto es
// por que los dos objetos apuntan a la misma referencia en memoria

// Ahora vamos a crear una funcion cumpleanios que aumente 1 vez la edad del objeto


function cumpleanios(persona) {
  persona.edad++
}
// Aca le pasamos por parametro el otroSteven y lo modifica pero si verificamos el
// objeto steven tambien se altero su edad
cumpleanios(otroSteven)

// Esto ocurre por el Side effect o efecto de lado, que modifica variables que no son
// locales en la funcion, y como programadores debemos evitar esto


// Entonces nosotros queremos que ese parametro que le pasamos a nuestra funcion
// no cambie de valor, que sea inmutable, podemos reescribir la funcion:

// Lo que hacemos es crear un clone y hacer llamado al metodo Object.assign({}, persona)
// Que recibe dos parametros, el primero un objeto el segundo otro objeto, lo que hace
// es que al primer objeto le asigna lo que tiene el segundo objeto que pasamos por
// parametro

// En este caso le vamos a pasar el primer parametro un objeto vacio y le vamos a asignar
// lo que tenga el objeto persona
cumpleanios = function(){
  const clone = Object.assign({}, persona)
  clone.edad++
  return clone
}

// Entonces aca hacemos todas las operacioes sobre ese clone y luego lo retornamos y asi
// no modificamos los objetos globales

// Vamos a corroborar que nuestro objeto steven realmente esta inmutable

const stevenViejo = cumpleanios(steven)

// Mostramos a stevenViejo que tendria 21 anios y steven conservaria sus 20 anios ya
// que estos dos objetos ya estan apuntando a diferentes referencias de memoria

// entonces si hacemos la comparacion de los objetos este nos retornaria false
steven === stevenViejo
//Output: false

// En programacion funcional, a lo que hicimos con la funcion de cumpleanios se le conoce
// como funciones puras, estas funciones no modifican el entorno en el que fueron
//creados

// EN E SIGUIENTE VAMOS A HABLAR DE LOS PAQUETES Y COMO CREARLOS EN NPM
