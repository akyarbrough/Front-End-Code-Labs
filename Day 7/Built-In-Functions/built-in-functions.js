//let people = [ "John", "James", "Jimmy"];
//console.log(`There are ${people.length} people.`);

let people = {
    0: "John",
    1: "James",
    2: "Jimmy",
    3: "Jane",
    length: 4,
    map: function(callback){
        let newArr = [];
        for (let i = 0; i < this.length; i++){
            console.log([i]);
        }
    }
}

//console.log(`There are ${people.length} people.`);

