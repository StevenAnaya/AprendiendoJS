
// AHORA VAMOS A HABLAR DE LOS GENERADORES EN JS

// Para decirle a JS que nuestra funcion es un generador debemos
// indicarlo con un asterisco de la siguiente forma:

// function(asterisco)

// Si creamos un generador debemos colocar la palabra clave yield
// la cual indica que cuando llamemos la funcion despues de la primera
// vez, esta iniciara en la despues de yield


// Como los iteradores esta funcion fibonacci nos retorna un next(), este tambien
// tiene un value y un done
function* fibonacci() {
  let a = 0, b = 1

  while (true) {
    let f = a
    a = b
    b = f + b
    let reset = yield f
    if (reset) a = 0, b = 1
  }
}


const fibo = fibonacci()

fibo.next()//0
fibo.next()//1
fibo.next()//1
fibo.next()//2
fibo.next()//3

// Para resetearlo
fibo.next(true)
