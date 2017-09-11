
var EventEmitter = require("events");

class Ticker extends EventEmitter{
    constructor(){
        super();
        this.message="woohoo";
    }

    ticking(){
        setInterval(() => this.emit("tick"), 1000);
    }
}

var clock = new Ticker();
clock.on("tick", function(){
    console.log(this.message);
})

clock.ticking();