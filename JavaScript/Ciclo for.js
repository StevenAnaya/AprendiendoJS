
// CUANTOS KILOMETROS RECORRE UNA PERSONA EN PROMEDIO

const nombre = 'Steven'

// De esta manera definimos un array en JS
const dias = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo"
]

function correr(){
  const min = 5
  const max = 15
  // Lo que hacemos es que esta funcion nos retorne un valor ramdom
  // entre 0 y 15, el math.round nos redondea un numero hacia arriba
  // y el math.random nos da un valor entre 0 y 1
  return Math.round(Math.random() * (max-min)) + min
}

let totalKms = 0
const length = dias.length
for (let i = 0; i < length; i++ ) {
  // Aca lo que hacemos es guardar el valor que nos retorna
  // la funcion de correr
  const kms = correr()
  totalKms += kms
  console.log(`El dias ${i} ${nombre} corrio ${kms}kms `);
}

const promedioKms = totalKms / dias.length
console.log(`en promedio, ${nombre} corrio ${promedioKms.toFixed(2)}Kms`);
