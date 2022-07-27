var Stack = /** @class */ (function () {
    function Stack(size) {
        this.size = size;
        this.elements = [];
    }
    Stack.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    Stack.prototype.isFull = function () {
        return this.elements.length === this.size;
    };
    Stack.prototype.push = function (element) {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);
    };
    Stack.prototype.pop = function () {
        if (this.elements.length === 0) {
            throw new Error('Stck is Empty!');
        }
        return this.elements.pop();
    };
    return Stack;
}());
var randBetween = function (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
};
var numbers = new Stack(5);
while (!numbers.isFull()) {
    var n = randBetween(1, 10);
    console.log("Push ".concat(n, " into the stack"));
    numbers.push(n);
}
while (!numbers.isEmpty()) {
    var n = numbers.pop();
    console.log("Pop ".concat(n, " from the stack"));
}
var words = 'The quick brown fox jumps over the lazy dog'.split(' ');
var wordStack = new Stack(words.length);
words.forEach(function (word) { return wordStack.push(word); });
while (!wordStack.isEmpty()) {
    console.log(wordStack.pop());
}
