function makeCounter(){
    let count = 0;

    return function(){
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter()); //0
alert(counter()); //1

alert(counter2());
//Prediction:  0
//Actual:

alert(counter2());
//Prediction: 1
//Actual: