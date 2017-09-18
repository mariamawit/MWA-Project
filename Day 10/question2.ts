class Car{
    name : string;
    acceleration : number;
    constructor(name : string){
        this.name = name;
        this.acceleration = 0;
    }

    honk(): void{
        console.log(`${this.name} is saying: Tooooot!`);
    }

    accelerate(speed : number): void{
        this.acceleration += speed;
    }    
}

var c = new Car("BMW");
c.honk();
console.log(c.acceleration);
c.accelerate(60);
console.log(c.acceleration);