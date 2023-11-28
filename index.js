function basicFunction(a, b) {
    return a + b;
}
basicFunction(2, 3); // returns 5
// optional parameters
function optionalParamFunction(a, b, c) {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
}
optionalParamFunction(1, 2); // returns 3
optionalParamFunction(1, 2, 3); // returns 6
// default parameters
function defaultParamFunction(a, b, c) {
    if (c === void 0) { c = 3; }
    return a + b + c;
}
defaultParamFunction(1, 2, 3); // returns 6
defaultParamFunction(1, 2); // returns 6
// rest paramters
function restParamsFunction(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(greeting, " ").concat(names.join(", "), "!");
}
restParamsFunction("Hello", "Steve", "Bill"); // returns "Hello Steve, Bill!"
restParamsFunction("Hello"); // returns "Hello !"
function add(a, b) {
    return a + b;
}
add("Hello ", "Steve"); // returns "Hello Steve" 
add(10, 20); // returns 30 
function printUser(currentUser) {
    console.log(currentUser.name);
}
var newUser = { name: "James", age: 23 };
printUser(newUser);
function getPhone(_a) {
    var _b = _a.name, name = _b === void 0 ? "Iphone 15 Pro Max" : _b, _c = _a.colour, colour = _c === void 0 ? "blue" : _c, _d = _a.proModel, proModel = _d === void 0 ? true : _d;
    console.log(name);
    console.log(colour);
    console.log(proModel);
}
getPhone({ name: "Samsung Galaxy" });
getPhone({ name: "Samsung Galaxy", colour: "black" });
getPhone({ name: "Samsung Galaxy", colour: "black", proModel: false });
function changePassword(user, newPass) {
    user.password = newPass;
    console.log(user.password);
}
changePassword({ username: "billy123", password: 'pass123' }, "newPass321");
