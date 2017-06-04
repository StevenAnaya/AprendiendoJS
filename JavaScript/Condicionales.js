
// Vamos a hacer un ejercicio que trata de que una persona solo puede ver una pelicula si alcanza la mayoria de edad

const starWars7 = 'Star Wars: El despertar de la fuerza';
const pgStarWars7 = 13;

const nameSteven = 'Steven'
let ageSteven = 20;

const nameCarlos = 'Carlos';
let ageCarlos = 11;

// Podemos setear un parametro desde el lugar de la funcion

const canWatchStarWars7 = (name, age, isWithAdult = false) => {

  if(age >= pgStarWars7){
    alert(`${name} puede pasar a ver ${starWars7}`);
  }else if (isWithAdult) {
    alert(`${name} puede pasar a ver ${starWars7}.
      Aunque su edad es ${age}, se encuentra acompanada/o por un adulto.`);
  } else {
    alert(`${name} no puede pasar a ver ${starWars7}.
      Tiene ${age} anios y necesita tener ${pgStarWars7}`);
  }
}

// Cuando un valor es undifined y se avalua en una condicion de false/true el valor siempre sera tomado como false

canWatchStarWars7(nameSteven,ageSteven);
canWatchStarWars7(nameCarlos, ageCarlos, true);
