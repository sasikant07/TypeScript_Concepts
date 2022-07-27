var format;
format = function (str, isUpper) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format('john', true)); // JOHN
var lowerCase;
lowerCase = function (str) {
    return str.toLocaleLowerCase();
};
console.log(lowerCase('Doe', false)); // doe
