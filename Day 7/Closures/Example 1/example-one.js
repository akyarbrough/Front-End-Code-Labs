function outer(){
    const someVar = "some value declared from outer scope";

    function inner(){
        console.log("someVar from inner function scope:", someVar);

        return "inner return value";
    }
    console.log("you will see this");
    return inner();
}


