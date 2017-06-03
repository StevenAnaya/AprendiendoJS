
// Quien gana una pelea entre goku y superman
var vidaGoku = 100
var vidaSuperman = 100

const MIN_POWER = 5
const MAX_POWER = 12

// Usamos arrow functions y no hay necesidad de escribir el return ya
// que solo tenemos una linea de codigo en la funcion.

// Podemos realizar condiciones sin necesidad de una estructura if solo utilizando
// los operadores relacionales que nos devuelven un valor true/false

const ambosSiguenVivos = () => vidaGoku > 0 && vidaSuperman > 0

const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER)) + MIN_POWER

const gokuSigueVivo = () => vidaGoku > 0

let round = 0

// Aca llamamos a la funcion que nos debe retornar un valor falso o
// verdadero segun como esta planteada la condicion en la funcion
while (ambosSiguenVivos()){
  round++
  console.log(`Round ${round}`);

  const golpeGoku = calcularGolpe()
  const golpeSuperman = calcularGolpe()

  if(golpeGoku > golpeSuperman){
    console.log(`Goku ataca a Superman con un golpe de  ${golpeGoku}`);
    vidaSuperman -= golpeGoku
    console.log(`Superman queda en ${vidaSuperman} de vida`);
  }else {
    console.log(`Superman ataca a goku con un golpe de ${golpeSuperman}`);
    vidaGoku -= golpeSuperman
    console.log(`Goku queda en ${vidaGoku} de vida`);
  }

}

if (gokuSigueVivo()) {
  console.log(`Goku gano la pelea. Su vida es de: ${vidaGoku}`);
}else {
  console.log(`Superman gano la pelea. Su vida es de ${vidaSuperman}`);
}
