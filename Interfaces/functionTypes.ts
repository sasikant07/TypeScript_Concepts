interface StringFormat {
    (str: string, isUpper: boolean): string
}

let format: StringFormat;

format = (str: string, isUpper: boolean) => {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

console.log(format('john', true));    // JOHN

let lowerCase: StringFormat;

lowerCase = (str: string) => {
    return str.toLocaleLowerCase();
}

console.log(lowerCase('Doe', false));    // doe
