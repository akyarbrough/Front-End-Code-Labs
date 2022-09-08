//Callback Functions
//A function that is passed in as an argument in another function

function executeThreeTimes(callback){
    for (let i = 0; i <= 3; i++);{
        callback();
    }
}

function printFullName(){
    console.log("John Doe");
}

executeThreeTimes(printFullName);
