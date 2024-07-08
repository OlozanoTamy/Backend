//ECMAScript
//Es el estandar en el que se base JavaScript
//Son las versiones de javascript

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const even = arr.filter((number) => number % 2 == 0)
console.log(even)

//Optional chaining (?.)

const firstStudent = {
    name: "Oscar",
    age: 24,
    passport: {
        number: 3412413,
        country: "n",
    }
}

const secondStudent = {
    name: "petro",
    age: 20
}

console.log(firstStudent.passport.country);
//Aca nos devuelve undefined -- Que es un tipo de dato, si le pongo passport.country en ese caso no lo va a enteder
console.log(secondStudent.passport?.country);
//Para eso se puede usar el opcional chaining que es un simbolo ? que si es undefined permite que el codigo se ejecute sin explotarlo
//Para revisar si un objeto tiene las propiedades


//Nullish operator
const age = 20;

//Sin nullish operator
const canDrive = age >= 18 ? true : false;

//Con nullish operator

const canDrive2 = age >= 18 ?? false;

console.log(canDrive);
console.log(canDrive2);

//Punto y Coma final
//Javascript tiene ASI (automatic semicolon insertion)


//Datos Primitivos
//EN Javascript
//INT -- STRING -- undefined -- null -- boolean


//Estructuras de datos
//Arrays : coleccion ordenada de elementos accesibles mediante indices
//Objetos : clave valor