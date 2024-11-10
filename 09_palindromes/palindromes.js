const palindromes = function (string) {

    const alphanum = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const stringProcesada = string
        .toLowerCase()
        .split("")
        .filter((character) => alphanum.includes(character))
        .join("");

    const reversed = stringProcesada.split("").reverse().join("");

    return stringProcesada === reversed;
};

console.log(palindromes("alaM"))

// Do not edit below this line
module.exports = palindromes;
