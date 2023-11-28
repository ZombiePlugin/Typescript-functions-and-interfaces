function basicFunction(a, b) {
  return a + b;
}

basicFunction(2, 3); // returns 5


// optional parameters
function optionalParamFunction(a: number, b: number, c?: number) {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
}

optionalParamFunction(1, 2); // returns 3
optionalParamFunction(1, 2, 3); // returns 6


// default parameters
function defaultParamFunction(a: number, b: number, c = 3) {
  return a + b + c;
}

defaultParamFunction(1, 2, 3); // returns 6
defaultParamFunction(1, 2); // returns 6


// rest paramters
function restParamsFunction(greeting:string, ...names:string[]): string {
    return `${greeting} ${names.join(", ")}!`
}

restParamsFunction("Hello", "Steve", "Bill"); // returns "Hello Steve, Bill!"
restParamsFunction("Hello");// returns "Hello !"


// function overloading
function add(a:string, b:string):string;

function add(a:number, b:number): number;

function add(a: any, b:any): any {
    return a + b;
}

add("Hello ", "Steve"); // returns "Hello Steve" 
add(10, 20); // returns 30 


// interfaces
interface User {
    name: String,
    age: Number
}

function printUser(currentUser : User) {
    console.log(currentUser.name);
}

let newUser = {name: "James", age: 23};
printUser(newUser);


// read-only interface
interface PhoneConfig {
    name? : string,
    colour?: string,
    proModel?: boolean
}

function getPhone({ name="Iphone 15 Pro Max", colour="blue", proModel=true} : PhoneConfig) {
    console.log(name);
    console.log(colour);
    console.log(proModel);
}

getPhone({name:"Samsung Galaxy"});
getPhone({name:"Samsung Galaxy", colour:"black"});
getPhone({name:"Samsung Galaxy", colour:"black", proModel:false});


// read-only interface
interface userData {
    readonly username : string,
    readonly password : string
}

function changePassword(user : userData, newPass : string) {
    user.password = newPass; // allows password change, however throws an error during development.
    console.log(user.password);
}

changePassword({username: "billy123", password: 'pass123'}, "newPass321");