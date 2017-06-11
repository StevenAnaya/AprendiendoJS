
// ACA VAMOS A PEDIR DATOS DE UNA API Y LUEGO LOS MANIPULAREMOS CON UN
// CALLBACK

// VAMOS A USAR UNA API DE STARWARS Y HAREMOS REQUEST SIN NINGUNA LIBRERIA
// EL CODIGO LO PODEMOS CORRER DESDE CODEPEN.IO

function get(URL, callback) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    const DONE = 4
    const OK = 200
    if (this.readyState === DONE) {
      if (this.status === OK) {
        //todo ok
        // para convertir un texto JSON en un objeto JSON para manipularlo es asi
        callback(null, JSON.parse(this.responseText))
      }else {
        //hubo un error
        callback(new Error(`Se produjo un error alm realizar el request: ${this.status}`),)
      }
    }
  }

  xhr.open('GET', URL);
  xhr.send(null);
}


// la funcion callback que ponemos como parametro debe recibir dos parametros:
// El primero es de error, si se produce un error entonces creamos el error y
// apuntamos al status del xhr.
// El segundo es la respuesta de ese request, que se hace en caso de cuando
// no hay error

function handleError(err) {
  console.log(`Request failed: ${err}`)
}

get('http://swapi.co/api/people/1/', funcion onResponse(err, luke){

  if (err) return handleError(err)

  get(luke.homeworld, function onHomeworldResponse(err, homeworld) {
    if (err) return handleError(err)

    luke.homeworld = homeworld
    console.log(`${luke.name} nacio en ${luke.homeworld.name}`);
  })
})


// ACA GENERAMOS UN PROBLEMA LLAMADO CALLBACK HELL QUE SE TRATA QUE CUANDO QUEREMOS 
// TRAER CIERTOS DATOS TENEMOS QUE GENERAR REQUEST Y REQUEST Y REQUEST Y ASI, PERO
// ESTO TIENE SOLUCION CON ALGO QUE SE LLAMA LAS PROMESAS
