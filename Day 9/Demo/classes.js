var User = /** @class */ (function () {
    function User(name, age) {
        this.name = "";
        this.age = 0;
        this.name = name; //accessing from line 2
        this.age = age; //accessing from line 3
    }
    return User;
}());
var adam = new User("adam", 30);
console.log(adam);
