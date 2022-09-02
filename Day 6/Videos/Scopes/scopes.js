//**Scopes**
//Accessibility of variables

//Global Scopes
//These variables are visible throughout the entire script/program
//Examples:
let x = 0; 

//Local Scope/inner scope/block scope
//A local scope has acces to its own variables as well as its outer scope variables. It does not have access to its inner scope.

//Examples:
//functions, conditional statements, classes, loops, etc

function logToConsole(){
    let y = 1; 
    console.log(x, y);
}

logToConsole();

console.log(y);//undefined because y is only in the local scope

