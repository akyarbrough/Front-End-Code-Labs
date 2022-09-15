let person = {
    name: "John",
    age: "54",
    getJob: function(job){
        console.log(job);
        console.log(this);
    
    }
}

person.getJob('teacher');
