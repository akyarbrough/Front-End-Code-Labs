//1.  Create a greeting function that returns another function which takes in a second parameter
function greeting(greeting){
    return function(name){
        return `${name}! ${greeting}`;
    };
}

//2.  Create a variable that calls the greeting function passing in a generic greeting
const basicWelcome = greeting("Welcome.");
const friendlyWelcome = greeting("So glad to see you again!");

//3.  Call the variable passing in the name used for the second parameter callback function

//console.log("basicWelcome:", basicWelcome("John"));
//console.log("friendlyWelcome:", friendlyWelcome("John"));

const myOwnGreeting = greeting("nice to see you!")

console.log(myOwnGreeting("james"))
