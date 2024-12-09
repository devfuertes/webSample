// Módulo

//Crea una función que genere una
// contraseña aleatoria con
// letras mayúsculas,
// letras minúsculas
// y números.

function passwordRandom() {

    const letters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz1234567890'
    passGenerate = ''

    for (let i = 0; i <= 10; i++) {
        let numberLettersRandom = Math.floor(Math.random() * letters.length);
        passGenerate += letters[numberLettersRandom]
}
return passGenerate;
}

console.log(passwordRandom()); 
