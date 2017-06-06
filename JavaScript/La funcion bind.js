
// ACA SE TOCARA MAS EN DETALLE LA FUNCION BIND

// la funcion bind tiene un poco de similaridad las dos retornan una funcion; la
// diferencia es que .bind() retorna una funcion con los parametros y/o con un
// contexto para this, mientras que las closures son funciones que recuerdan el
// scope de las variables o funciones

// Para este ejemplo vamos a utilizar un ejemplo con una hoja HTML

class Toggable {
  // recibimos como parametro el elemento html que obtenemos
  constructor(el){
    // aca igualamos el valor del elemento
    this.el = el
    // luego nos aseguramos de que el texto del elemento este en "Off"
    this.el.innerHTML = "Off"
    // Seteamos el valor de la propiedad .activated en false
    this.activated = false

    // Tambien podemos hacerlo de la siguiente forma:
    // this.onClick = this.onClick.bind(this)
    // this.el.addEventListener('click', this.onClick)

    // Aca surge un problema ya que cuando hacemos referencia al this.onClick
    // JS interpreta el contexto que el addEventListener le pone ya que es un
    // callback y no se sabe cuando se llamara, entonces lo que queremos nosotros
    // es usar el contexto this pero del this.el que es el del objeto que creamos
    // con la class, lo podemos solucionar asi:

    this.el.addEventListener('click', this.onClick.bind(this))
  }

  onClick(ev){
    console.log('Esto es lo que tiene this en el onClick', this);
    // Cuando sea activado, pone el valor contrario al que tiene
    this.activated = !this.activated
    this.toggleText()
  }

  toggleText(){
    this.el.innerHTML = this.activated ? 'On' : 'Off'
  }
}

const button = document.getElementById('boton')

const miBoton = new Toggable(button)


// Otra aplicacion que tiene el .bind() es el de setear un parametro de una
// funcion por siempre, es decir le podemos decir a una funcion que un parametro
// siempre tendra el mismo valor. Esto seria asi:

function saludar(nombre,apellido){
  console.log(`Hola ${nombre} ${apellido}`);
}

const saludarStevens = saludar.bind(null,"Steven")

// Aca le dicimos a bind que nos deje el cambio de contexto en null, pero luego
// de la "," le indicamos cual es el valor del parametro que le queremos
// setear por siempre a esa funcion
