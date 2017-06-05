
// USANDO EL MISMO EJEMPLO DE LOS OBJETOS DEL CODIGO ANTERIOR
// AHORA VAMOS A CREAR OBJETOS POR MEDIO DE LAS CLASES



// De esta manera declaramos una clase en JS
// Este tiene el nombre de class pero funciona tal cual como un
// prototipo
class Punto {
  constructor(x, y) {
    // Como recordatorio se sabe que el this es para referenciar a
    // la variable que se usa en todo el objeto y que se iguala el
    // valor a la variable que recibimos como parametro
    this.x = x
    this.y = y
    // Se sabe que el return this esta implicito en JavaScript
  }

  // De esta manera creamos metodos a una clase

  moverEnX(x){
    this.x = x
  }

  moverEnY(y){
    this.y = y
  }

  distancia(p){
    const x = this.x - p.x
    const y = this.y - p.y

    return Math.sqrt(x * x + y * y)
  }
}

// DE IGUAL MANERA NO SE ESCRIBE COMO UN PROTOTIPO PERO ESTE IGUAL
// POSEE EL __proto__, SIMPLEMENTE ES UNA MANERA MAS FACIL Y ESTETICA
// DE ESCRIBIR PROTOTOTIPOS

const p1 = new Punto (0, 4)
const p2 = new Punto (3, 0)

// SI MODIFICAMOS UN PROTOTIPO DESDE UN OBJETO A, EL OBJETO B TAMBIEN
// TOMARA ESE CAMBIO DEL PROTOTIPO QUE SE HIZO DESDE EL OBJETO A

console.log(p1.distancia(p2));
console.log(p2.distancia(p1));
p1.moverEnX(10)
console.log(p1.distancia(p2));
p2.moverEnY(-4)
console.log(p1.distancia(p2));
