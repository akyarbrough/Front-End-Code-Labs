//Return a Boolean f a number is divisible by 10
//Here, you'll create a function that'll give you a "true" or "false" Boolean as its output.  The inputed number should onl return a "true" if it's divisible by 10. Otherwise, your program should return a "false" answer.

let optionOne = 3;
let optionTwo = 30;

//if number /10 returns a remainder of 0, then console.log true;
function isDivisibleByTen(){
    let result = null;
    if ((optionOne % 10) === 0) {
        result = true;
    } else {
        result = false;
    }
    return result;
}
console.log(isDivisibleByTen());