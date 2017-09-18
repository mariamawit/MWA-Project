class Person{
    private _firstName: string = " ";
    get firstName(){
        return this._firstName;
    }
    set firstName(value: string){
        this._firstName = value.toUpperCase();
    }

    private enumerable :boolean =  true;
    private configurable : boolean = true;
}

var p = new Person();
p.firstName = "Asaad";
console.log(p.firstName);