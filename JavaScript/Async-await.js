
// AHORA VAMOS A VER EL ASYNC-AWAIT QUE NOS PERMITE ESCRIBIR CODIGO DE MANERA
// ASINCRONA, ESTE LO PODEMOS IMPLEMENTAR SOBRE LAS PROMESAS

  // -----------------------------------------------------------------------------------



function get(URL) {
  return new Promise((resolve, rejected)=>{
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      const DONE = 4
      const OK = 200
      if (this.readyState === DONE) {
        if (this.status === OK) {

          resolve(JSON.parse(this.responseText))
        }else {

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

// Usamos async para indicar una funcion asincrono
async function getLuke(){
  //Aca colocamos en una variable el fetch
  //como fetch es asincrono no tenemos que poner que nos
  //retorne el resultado lo unico que hacemos es guardar ese retorno
  //automatico en una variable y a esa variable le ponemos
  //await para que js espere a que el fetch se complete y asi
  //Guarde el resultado de ese fetch

  // Para manejar los errores podemos usar de la convecional estructura
  // del trycatch
  try{
      // Aca la diferencia es que cuando usamos el fetch sabemos que es una funcion
      // asincrona entonces lo que hacemos es darle despues de = el await y lo guardamos
      // en una variable, entonces el await nos asigna el valor que nos retorna el fetch
      // cuando el fetch se complete
      const response = await fetch('http://swapi.co/api/people/1/')
      const luke = await response.json()
      const responseHomeWorld = await fetch(luke.homeworld)
      luke.homeworld = await responseHomeworld.json()
      console.log(`${luke.name} nacio en ${luke.homeworld.name}`);
  } catch(err){
    handleError(err)
  }

}

// En conclusion el await nos permite completar una accion cuando el proceso
// asincrono se complete
//En este caso toca usar babel para transpirar el codigo ya que no es soportado
// por todos las navegadores
