let firstName = "";
let num:number = 10;
let on:boolean = true;
let place:any;
let nothing:null = null;
let names: string[]= ["John", "Amy"];
let numText: number | string = '';
let user: {name: string; age: number} = {
    name: "john",
    age: 43
}

// ** Functions in typescript**

function printMyName(name:string): void {
    console.log(name);
}
console.log(printMyName("John"));