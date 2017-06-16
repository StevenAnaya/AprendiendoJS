

// LA MEMORIZACION NOS AYUDARA A RECORDAR VALORES QUE HEMOS CALCULADO ANTERIORMENTE

// ESTA MEMORIZACION ES CONOCIDA TAMBIEN LA PROGRAMACION DINAMICA

// El problema de esta recursividad es que si necesitamos por ejemplo el numero
// 20 de a serie, esta funcion se llamara mas de 4000 veces, y llenara la pila
// de ejecucion, esto resulta ser poco optimos

let contador

function fibonacci(num, memoria = {}) {
  // Entonces el pregunta si hay algo en la memoria en la posicion del numero
  // que queremos calcular, si hay algo el retorna el numero ya calculado,
  // y no tiene que volverlo a calcular y no se llamaria de nuevo la funcion
  if(memoria[num]) return memoria[num]
  if (num == 1) return 0
  if (num == 2) return 1

  contador++

  // Aca lo que hacemos es que guarde el numero calculado en la posicion
  // del numero que queremos lo que nos retorna esta funcion

  // tenemos que pasarle la memoria por parametro o si no siempre llegara
  // a la funcion como un objeto vacio
  return  memoria[num] = fibonacci(num - 1, memoria) +
                          fibonacci(num - 2, memoria)
}

// Podemos crear un objeto que guarde los numeros que se vayan a calculando

fibonacci(4)

// AHJORA VAMOS A VER OTRA SOLICION AL PROBLEMA DE FIBONNACI PERO ESTA VEZ SON 
// CON ITERADORES, ESTOS ITERADORES SON LISTA INFINITAS
