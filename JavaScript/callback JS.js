
// ACA SE EXPLICAN A FONDO LAS CALLBACKS O LLAMADOS A FUNCIONES ASINCRONAS





// Esta funcion setTimeout la podemos llamar desde cualquier scope, si queremos lo
// hacemos desde el scope global, esta recibe como parametro una funcion que se
// ejecutara y el tiempo que tardara esa funcion en ejecutarse, este se da en
// milisegundos

setTimeout(function callback() {
  console.log('Ya pasaron 3 segundos');
},3000 )


console.log('Hola');

// En este ejemplo se muestra primero el Hola y luego de los 3segundos se muestra
// el log de la funcion, debido a que es una funcion asincrona y por la cuestion
// de como ejecuta JS el codigo


// OTRO EJEMPLO UN POCO MAS COMPLEJO

setTimeout(function callback() {
  console.log('A');
},0 )

console.log('B');


// aca de igual forma se sigue mostrando primero el mensaje B ya que la funcion
// se queda en la cola de tareas y hasta no ejecutar todo el codigo no se ejecuta
// la funcion


// OTRO EJEMPLO MAS COMPLEJO

setTimeout(function callback() {
  console.log('A');
},1000)

for (let i = 0; i < 99999999999999999; i++) {
}

console.log('B');

// En este ejemplo generamos un cuello de botella en la pila de ejecucion ya que 
// el carga el setTimeout y despues trata de realizar el for este se queda
// pegado y no permite cargar ninguna funcion mas, entonces es importante
// evitar funciones sincronas en lo mayor posible, para no trabar la pila de
// ejecucion
