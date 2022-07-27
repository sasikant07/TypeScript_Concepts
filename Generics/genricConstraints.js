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
var merge = function (obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
};
// Compilation Error
// let person = merge(
//     {name: 'John'},
//     25      // Error: Argument of type 'number' is not assignable to parameter of type 'object'.
// );
var person = merge({ name: "John" }, { age: 27 });
console.log(person);
// Using Type Parameter Generic Constraints
var prop = function (obj, key) {
    return obj[key];
};
var str = prop({ name: "John" }, 'name');
console.log(str);
