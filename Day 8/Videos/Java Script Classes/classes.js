//A class is a blueprint for objects
class User {
    //instance properties -> data
        //things like variables
username = ''
    //constructor -> that is executed when a instance gets created
        //instance - an object created by a class
constructor(newUserName){
    this.username = newUserName;
    console.log("instance was created!")
    }
    //methods -> define logic to manipulate data
        //functions inside of methods
printMyName(){
    console.log(`My name is ${this.username}`)
    }
}

let user = new User("John123");
console.log(user);
user.printMyName();

let userTwo = new User("Amy123");
console.log(userTwo);
userTwo.printMyName();
