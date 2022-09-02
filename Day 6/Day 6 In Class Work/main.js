//Global Scope

let firstName = "John";

//created a local scope
function printName(){
    let firstName = "James";
    console.log(firstName);
}

printName(); //prints "James"

