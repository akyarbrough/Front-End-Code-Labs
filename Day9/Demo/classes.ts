class User{
    name:string = "";
    age:number = 0;

    constructor(name:string, age: number){
        this.name = name;  //accessing from line 2
        this.age = age;    //accessing from line 3
    }


    printMyName(){
    console.log(this.name)
    }


    printMyAge(){
    console.log(this.age);
}
printDetails(){
    this.printMyName();
    this.printMyAge();
}


let adam = new User("adam", 30);
let Amy = new User("Amy", 40);