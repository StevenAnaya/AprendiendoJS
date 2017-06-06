
// ENTIENDE LOS CLOSURES DE JAVASCRIPT

// LOS CLOSURES SON LAS FUNCIONES QUE RECUERDAN EL ENTORNO EN EL CUAL FUERON CREADAS
// Y COMO ACCEDER A LAS VARIABLES QUE PERTENECEN A DICHO SCOPE


// En esta funcion estamos recibiendo como parametro cada uno de los apellidos de las familias
// luego esta funcion nos retorna una funcion en el cual estamos haciendo el .log en donde
// estamos accediendo al apellido de la funcion saludarFamilia
function saludarFamilia(apellido) // Esta es una OuterFunction o funcion Externa
{
  return function saludarMiembroDeFamilia(nombre) //Esta es la Inner function o funcion interna
  //Esta funcion interna puede acceder a las variables que se usen en la funcion Externa
  //que tiene un scope mayor y estas recuerdan el valor que tenian esas variables en ese momento
  {
    console.log(`Hola ${nombre} ${apellido}`);
  }
}

// Cunado guardamos el saludarFamilia el nos guarda el return que seria la funcion que tiene
// ya guardado el apellido y cuando hacemos el llamado abajo de saludarGomez pasamos como
// parametro el nombre a la funcion que nos retorno el saludarFamilia
const saludarGomez = saludarFamilia("Gomez")
const saludarPerez = saludarFamilia("Perez")
const saludarRomero = saludarFamilia("Romero")



saludarGomez("Pedro")
saludarGomez("Laura")
saludarGomez("Juam")

saludarPerez("Dario")
saludarPerez("Martin")
saludarPerez("Josefa")


// ------------------------PREFIJOS----------------------------------------------------------

// EJERECICIOS CON CLOSURES PARA CREAR PALABRAS CON PREFIJOS


function prefijo(prefijo){
  return function palabraPrefijo(palabra){

    console.log(`${prefijo}${palabra}`)
  }
}



const prefijoRe = prefijo("Re")
const prefijoIn = prefijo("In")

prefijoRe("Bueno")
prefijoIn("creible")
prefijoRe("feo")
