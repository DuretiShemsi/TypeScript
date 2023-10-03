//Write a function greet that takes in a name (string) and returns a greeting (string).
function greet(name) {
    return "Hello, ".concat(name, "!");
}
var greeting = greet("Mike");
console.log(greeting);
