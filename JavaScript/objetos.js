//
// // CALCULAR LA DISTANCIA ENTRE DOS OBJETOS
//
// // AGREGAR METODOS A LOS OBJETOS
//
// Este es nuestro prototipo Punto
function Punto (x, y){
  // this en este caso hace referencia al atributo x del objeto
  // que creo cuando damos la palabra new mas abajo
  this.x = x
  this.y = y

}

// Para agregar metodos a un prototipo lo que hacemos es esto

Punto.prototype.moverEnX = function moverEnX(x) {
  // Estos this hacen referencia al objeto desde donde se este
  // llamando el metodo del prototipo
  this.x += x
};
Punto.prototype.moverEnY = function moverEnY(y) {
  this.y += y
};

Punto.prototype.distancia =  distancia (p) {
  const x = this.x - p.x
  const y = this.y - p.y

  return Math.sqrt(x*x+y*y)
};


// VAMOS A CREAR UN OBJETO POR EL METODO DE Object.create

// De esta forma creamos un objeto de tipo punto y apartir de el
// creamos mas objetos similares a el


const Punto = {
  // Tenemos que agregar un constructor por que JavaScript no sabe
  // que es lo que primero correra de ese objeto, entonces creamos
  // un constructor donde llegan nuestros valores parametros
  init: function init (x, y){
    this.x = x
    this.y = y
  },
  moverEnX: function moverEnX(x){
    this.x += x
  },
  moverEnY: function moverEnY(y){
    this.y += y
  },

  distancia: function distancia(p){
    const x = this.x - p.x
    const y = this.y - p.y

    return Math.sqrt(x * x + y * y)
  }
}

// Y creamos los objetos de esta forma

const p1 = Object.create(Punto)
p1.init(0, 4)

const p2 = Object.create(Punto)
p2.init(3, 0)







// entonces ya no creamos el objeto de la forma anterior si no
// creamos asi:

const p1 = new Punto(0, 4)
const p2 = new Punto(3, 0)

// De esta manera creamos objetos y le podemos agregar funciones
// esta es la primera forma
const p1 = {
  x: 0,
  y: 4,
  // de esta manera agregamos metodos a los objetos
  moverEnX: function (x) {
    // usamos el this para referirnos al atributo que tenemos
    // declarado arriba; seria x(arriba) = x(arriba) + x(parametro)
    this.x += x
  },
  moverEnY: function(y) {
    this.y += y
  }

  podemos escribirlos tambien asi
  moverEnZ: (z){
    this.z += z
  }
}





function distancia(p1, p2) {
// De esta manera le indicamos que tome el atributo x del objeto p1
  const x = p1.x - p2.x
  const y = p1.y - p2.y

  return Math.sqrt(x * x + y * y)
}

// De esta manera llamamos la funcion y le pasamos como argumento
// los objetos que creamos
console.log(distancia(p1, p2));

// aca calculamos la distancia de ciertos puntos
console.log(p1.distancia(p2));


// De esta manera podemos introducir como argumento un objeto que
// no este declarado
console.log(distancia(p1, {x: 20, y: -7}));

p1.moverEnX(10)
p2.moverEnY(-4)
