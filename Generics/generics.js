var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var getRandomElement = function (items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
};
var numbers = [1, 5, 7, 4, 2, 9];
var randomEle = getRandomElement(numbers);
console.log(randomEle);
var merge = function (obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
};
var result = merge({ name: "John" }, { jobTitle: "Frontend Developer" });
console.log(result);
