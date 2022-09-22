//Create a createBankAccount function that takes in an initial balance and declares it in the main function scope

const createBankAccount = (initialBalance) => {
    let userBalance = initialBalance;

    //Return an object of methods that use this variable
    //Use that variable and call methods on it to add functionality
    return{
        getBalance: function() {
            return userBalance;
        },
        deposit: function(amount){

        }
    
}

const myAccount = createBankAccount(100)