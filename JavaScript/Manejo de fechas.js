
// CUANTO TIEMPO PASO DESDE TU FECHA DE NACIMIENTO


// Creamos un objeto de tipo Date
// Podemos pasarle parametros a ese contructor de Date(), tales como:
// Date (anio,mes-1,dia) Date(1997,0,04)
const nacimiento = new Date(1997,0,04)

// Si no le pasamos parametros a el objeto Date() JavaScript toma la fecha
// del dia actual
const hoy = new Date()

// Podemos operar fechas de la siguiente manera, pero JavaScript nos devuele el
// resultado de esta operacion en milisengundos

const tiempo = hoy - nacimiento

// Si los queremos en segundos hacemos esto:
const tiempoSegundos = tiempo / 1000

// Si los queremos en minutos hacemos esto:
const tiempoMin = tiempoSegundos / 60

// Si lo queremos en horas hacemos esto:
const tiempoHoras = tiempoMin / 60

const tiempoDias = tiempoHoras/ 24


// Para calcular cuando sera nuestro proximo cumpleanios
// Usamos el objeto que habiamos creado con la fecha actual, ademas
// le damos el metodo .getFullYear() que nos trae el anio solo de ese
// objeto

// Tambien podemos usar los metodos .getFullMonth() y getDate() para obtener
// el mes y el dia no mas de un objeta de tipo Date


const proximo = new Date(hoy.getFullYear(), namiento.getFullMonth(), namiento.getDate())

// Este nos devuelve los dias en ingles, para pasarlos a espaniol lo que hacemos es
// esto: Creamos un array con los dias en espaniol

const diasSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado"
]

// Aqui nos trae del proximo.getDate() el indice en el que se encuentra el dia
// que nos muestra en ingles, que en este caso seria el 6, entonces lo que
// hacemos es darle ese indice a nuestro arreglo de dias pero en espaniol
console.log(diasSemana[proximo.getDate()]);
