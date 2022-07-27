function add(a: number, b: number) : number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}

let result = add(10, 20);

console.log('Sum :',result);
