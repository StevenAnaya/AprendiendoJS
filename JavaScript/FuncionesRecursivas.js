
//ACA VAMOS A VER LAS FUNCIONES RECURSIVAS EN JS

// Las funciones recursivas son funciones que se llaman a si mismas, si, el resultado de la funcion
// es el llamado de la misma funcion

// Este comportamiento es muy importante para solucionar cosas como series o algoritmos  que tomen en cuenta valores
// pasados

// la recursividad se compone de dos partes indispensables:
// 1. Un caso base
// 2. El llamado de la misma funcion dentro de la funcion

// sin un caso base, la funcion se va a llamar infinitamente, esto quedara mas claro con el ejemplo de serie de fibonacci


function fibonacci(num) {
  // Esta es la base de nuestra recursividad, con este evitamos que se llame infinitamente, sin un caso base podemos generar un
  // loop infinito
  if (num == 1) return 0
  if (num == 2) return 1

  // Aca le decimos que nos retorne a fibonacci pero un numero anterior, y que sume a fibonacci pero 2 numeros antes
  return fibonacci(num - 1) + fibonacci(num - 2)
}

fibonacci(1) //0
fibonacci(2) //1
fibonacci(3) //1
fibonacci(4) //2
fibonacci(5) //3
fibonacci(6) //5
fibonacci(7) //8
fibonacci(8) //13

// ESTE CASO DE RECURSIVIDAD ES POCO EFECTIVO CUANDO NECESITOS NUMEROS MUY GRANDES, PARA SOLUCIONAR ESTO PODEMOS ACUDIR 
// A LA MEMORIZACION
