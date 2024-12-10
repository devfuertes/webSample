// Módulo

//Crea una función que genere una
// contraseña aleatoria con
// letras mayúsculas,
// letras minúsculas
// y números.

// //Código del Profesor

// function randomDigit() {
//     return Math.trunc(Math.random() * 10);
// }

// function randomInInterval(min, max) {
//     return Math.trunc(Math.random() * (max + 1 - min) + min);
// }

// function randomLetter() {
//     const letters = "abcdefghijklmnñopqrstuvwxyz";
//     return letters[randomInInterval(0, letters.length - 1)];
// }

// export function generatePassword() {
//     for (let i = 0; i < 2; i++) {
//         const result = "";
//         result += randomInInterval(0, 9);
//         result += randomLetter();
//         result += randomLetter().toUpperCase;
//     }
//     return result;
// }

// console.log("password", generatePassword());

function passwordRandom() {
    const letters =
        "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz1234567890";
    passGenerate = "";

    for (let i = 0; i <= 10; i++) {
        let numberLettersRandom = Math.floor(Math.random() * letters.length);
        passGenerate += letters[numberLettersRandom];
    }
    return passGenerate;
}

console.log(passwordRandom());
