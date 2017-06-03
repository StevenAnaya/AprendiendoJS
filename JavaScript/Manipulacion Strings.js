// Vamos a crear un idioma manipulando strings

// -------------------------------REGLAS------------------------------------
    // Si la palabra termina en ar, se le quita esa parte de la palabra
    // Si la palabra tiene 10 o mas caracteres se parte a la mitad y se agrega un -
    // Si la plabra es un palindromo se empieza con mayuscula cada letra por medio SoMeTeMoS
    // Si la palabra empieza con z se le agrega al final pe
// -------------------------------/REGLAS------------------------------------


function platzom (str) {
  // Hacemos esto por que cuando ejecutamos funciones sobre strings, estos no se modifican. Entonces
  // lo que hacemos es crear una variable al que le asignamos el valor de ese string y a sobre esa variable
  // es la que trabajamos
  let translation = str

  // Si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando
  // mayusculas y minusculas

  const reverse  = (str) => str.split('').reverse().join('')

  function minMay(str) {
    const length = str.length
    let translation = ''
    let capitalize = true
    for (let i = 0; i < length; i++) {
      const char = str.charAt(i)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize
    }

    
    return translation
  }

  if(str == reverse(str)){
    return minMay(srt)
  }

  // Si la palabra termina en "ar"

  // Hacemos la condicion para que pregunte si el string termina en ar y que si esta en mayuscula lo convierta en minuscula
  if (str.toLowerCase().endsWith('ar')) {
    // Con el metodo .slice(0,-2) podemos cortar caracteres indicando desde donde queremos empezar y hasta donde queremos
    // dejar el caracter; en este caso seria desde 0 hasta dos caractares antes del final
    translation = str.slice(0,-2)
  }

  // Si la palabra inicia con Z se agrega "pe"
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe'
  }

  // Si la palabra tiene mas de 10 letras se parte a la mitad y se agrega en el medio un -

  const length = translation.length

  if (length >= 10) {
    // Aca lo que hacemos es que el slice nos corte desde el inicio hasta el final la cadena de caracteres
    // el Math.round nos calcula la mitad de la cadena con el length/2
    const firtsHalf = translation.slice(0, Math.round(length/2))
    // En la segunda parte para cortar la otra mitad lo unico que hacemos es indicar desde que parte la corte
    // y el otro parametro lo toma como si fuese hasta el final del caracteres
    const secondHalf = translation.slice( Math.round(length/2))
    translation = `${firtsHalf}-${secondHalf}`

  }


  return translation
}

console.log(platzom('Programar'));
console.log(platzom('Zorro'));
console.log(platzom('Zarpar'));
console.log(platzom('abecedario'));
console.log(platzom('sometemos'));






function platzom(str) {
  let translation = str

  // Si la palabra original es un palíndromo,
  // ninguna regla anterior cuenta y se devuelve
  // la misma palabra intercalando mayúsculas y minúsculas

  const reverse = (str) => str.split('').reverse().join('')

  function minMay(str) {
    const length = str.length
    let translation = ''
    let capitalize = true
    for (let i = 0; i < length; i++) {
      const char = str.charAt(i)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize
    }

    return translation
  }

  if (str == reverse(str)) {
    return minMay(str)
  }

  // Si la palabra termina en "ar", se le quitan esos dos caracteres
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2)
  }

  // Si la palabra inicia con Z, se le añade "pe" al final
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe'
  }

  // Si la palabra traducida tiene 10 o más letras,
  // se debe partir a la mitad y unir con un guión del medio
  const length = translation.length
  if (length >= 10) {
    const firstHalf = translation.slice(0, Math.round(length / 2))
    const secondHalf = translation.slice(Math.round(length / 2))
    translation = `${firstHalf}-${secondHalf}`
  }

  return translation
}

console.log(platzom("Programar")) // Program
console.log(platzom("Zorro")) // Zorrope
console.log(platzom("Zarpar")) // Zarppe
console.log(platzom("abecedario")) // abece-dario
console.log(platzom("sometemos")) // SoMeTeMoS
