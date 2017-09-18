class BaseObject {
    widths: number = 0;
    lengths: number = 0;
    constructor(public width: number, public length: number){
        this.widths = width;
        this.lengths = length;
    }
}

class Rectangle extends BaseObject{
    constructor(public width: number, public length: number){
        super(width, length);
    }

    public calcSize(){
        this.width * this.length;
    }
}

const rec = new Rectangle(2, 4);
console.log(rec.calcSize());

