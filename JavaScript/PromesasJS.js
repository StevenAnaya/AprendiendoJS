
// ACA HABLAREMOS DE LAS PROMESAS EN JS, LAS PROMESAS EN JS SON OBJETOS Y ESTAN ASOCIADAS CON ALGUNA TAREA
// ASINCRONA
// EXISTEN TRES ESTADOS INTERNOS DE LAS PROMESAS: PENDING, FULLFILED, REJECTED
// EL CONSTRUCTOR PROMISE RECIBE DOS PARAMETROS

// De esta manera se puede crear una promesa

// Es importante llamar dentro del cuerpo de la funcion a reject o a resolve
// a alguna de las dos se tiene que llamar

const promise = new Promise(function (resolve, reject){
  setTimeout(function () {
    reject(new Error('Se produjo un error'))
  }, 1000)
})

// Cuando se completa una promesa usamos el then cuando se completo
// correctamente y podemos usar el .catch para capturar el error si
// se produce
promise
  .then(function () {

  })
  .catch(function (err) {

  })

  // -----------------------------------------------------------------------------------

  // AHORA VAMOS A MOSTRAR QUE LUKE SKYWALKER NACIO EN TATOOINE PERO YA NO CON CALLBACKS
  // SI NO CON PROMESAS

// Aca ya nuestro metodo get solo necesita la URL para hacer el request
function get(URL) {
  // Entonces tenemos que retornar una nueva promesa
  return new Promise((resolve, rejected)=>{
    // Entonces aca dentro es donde iria el cuerpo de el request
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      const DONE = 4
      const OK = 200
      if (this.readyState === DONE) {
        if (this.status === OK) {
          // Aca resolve no necesita que le mandemos un error porque resolve es por que se
          // hizo bien, no es necesario el null
          resolve(JSON.parse(this.responseText))
        }else {
          // Rejected tambien solo recibe el error, no mandamos el objeto que devuelve
          // el request ni nada, solo el error
          rejected(new Error(`Se produjo un error alm realizar el request: ${this.status}`),)
        }
      }
    }

    xhr.open('GET', URL);
    xhr.send(null);
  })
}




function handleError(err) {
  console.log(`Request failed: ${err}`)
}

let luke

fetch('http://swapi.co/api/people/1/')
  // Entonces llamamos a .then para que reciba el resultado de ese request, recibiria el
  // JSON de texto que convertimos a JSON object
  .then((response)=> {
    luke = response
    return fetch(luke.homeworld)
  })
  .then((homeworld)=>{
    luke.homeworld = homeworld
    console.log(`${luke.name} nacio en ${luke.homeworld.name}`);
  })
  .catch(err => handleError(err))


// DE ESTA MANERA PODEMOS ARREGLAR EL PROBLEMA A LOS CALLBACKS HELL,
// TAMBIEN PODEMOS USAR EL METODO FETCH QUE TIENE MAS FUNCIONES EN LUGAR DE
// USAR EL GET
