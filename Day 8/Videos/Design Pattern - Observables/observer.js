class Observable{
    subscribers = [];

    subscribe(fn){
        this.subscribers.push(fn)
    }  


    broadcast(value){
        this.subscribers.forEach((fn)=>{
       fn(value) 
        })
    }
}

let celebrityObsv = new Observable();
celebrityObsv.subscribe((event)=>{
    console.log(`I am going to ${event}.`);
})

celebrityObsv.subscribers((event)=>{
    console.log(`I am not going to ${event}.`);
})

celebrityObsv.broadcast("Disco Morning");

debugger;
