//Write function sum that work likes this:  sum(a)(b) = a + b;

//sum(1)(2) = 3;
//sum(5)(-1) = 4;

function sum(a){
    return function(b){
     console.log(a +b);   
    }
}
sum(1)(2);
sum(3)(-5);

