
// ACA VEREMOS QUE ES LA PALABRA RESERVADA THIS Y PARA QUE SON LAS
// ARROW FUNCTIONS

// This hace referencia a un objeto y su valor depende de donde lo usemos

class Persona {
  constructor(nombre, amigos = []) {
    this.nombre = nombre
    this.amigos = amigos
  }

  listarAmigos(){
    // El metodo forEach ejecuta una funcion que recibe por parametro por cada uno de los
    // elementos de un array
    this.amigos.forEach(function (amigo){
      console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${this.amigo}`);
    })
  }
}



// Si dejamos esto tal cual esta no arrojara error de undifined nombre

// Por que sucede esto? esto es por que cuando hacemos refencia a ${this.nombre} en la funcion interna,
// este toma el scope de la funcion interna y ese this hace referencia al contexto de esa funcion. Osea
// pasa lo contrario a loq ue queremos hacer, se quiere hacer que el this.nombre haga referencia al contexto
// del scope externo para poder traer el noombre que esta en el scope de la funcion externa

// Estas son las soluciones a estos

// Primero podemos crear una constante y guardar ese contexto this que necesitamos antes de ingresar
// a la funcion

listarAmigos(){
  // tambien podemos hacer referencia a un contexto exterior con la palabra self
  const _this = this
  const self = this

  this.amigos.forEach(function (amigo){
    console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${this.amigo}`);
  })
}

//Tambien podemos hacer uso del metodo .bind() que nos permite hacer que una funcion tome el contexto
// anterior

listarAmigos(){
  this.amigos.forEach(function (amigo) {
    console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${this.amigo}`);
  }.bind(this))
}

// Esta funcion recibe como parametro el contexto al que queremos apuntar
// Tambien podemos crear una constante y asignar ese contexto y pasar cmomo
// parametro esa constante


// La tercera y mejor forma de solucionar es realizar una arrow function, que tiene
// como una caracteristica implementar automaticamente el metodo .bind() y apuntar
// al contexto anterior

listarAmigos(){
  this.amigos.forEach((amigo)=>{
    console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${this.amigo}`);
  })
}

const sacha = new Persona ("Sacha", ["Carlos","Pedros"])
