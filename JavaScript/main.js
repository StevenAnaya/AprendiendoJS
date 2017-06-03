console.log("El area del triangulo es:" + 5*7/2);


// Podemos incluir codigo javascript dentro de una cadena de texto asi:
// ${5*7/2} y ademas si en lugar de usar las comillas "" usamos comilla invertida `` Evitamos la concatenacion
// de el codigo que no es string

console.log(`El area de un triangulo de base 5 y altura 7 es: ${5*7/2}`);

// Como practica la palabra reservada let , se usa para variables que tienen un scope
// definido y que se usan solo en un bloque de codigo establecido

// La palabra var se utiliza para variables globales que no tienen como tal un scope 
// definido dentro de una clase, funcion o bloque de codigo

let base = 5
let altura = 7
let radio = 5

function triangleArea(base, altura) {


  return base * altura / 2
}

console.log(`El area de un triangulo de base ${base} y altura ${altura} es: ${triangleArea(base, altura)}`);


// Ahora podemos hacer una arrow function que nos permite crear funciones dentro de variables y asi ahorrar codigo


const triangleArea = (base, altura) => base * altura / 2

// De esta manera le quitamos el nombre a la funcion y dejamos solo los parametros que recibe esta funcion, luego
// con la flecha => indicamos que es lo que se ejecutara dentro de esa funcion. Podemos colocar mas lineas de codigo
// solo seria agregar los corchetes.
let radio = 5

const circleArea = (radio) => Math.PI * Math.pow(radio,2)

console.log(`El area del circulo de radio ${radio} es: ${circleArea(radio)}`);
