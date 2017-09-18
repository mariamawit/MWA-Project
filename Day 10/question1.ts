class BankAccount{
    money: number = 2000;
    deposit(value: number): void {
        this.money += value;
    }
}

class Myself {
    name : string = "Asaad";
    bankaccount : BankAccount = new BankAccount();
    hobbies: string[] = ["Violin", "Cooking"];
}
 
var my = new Myself();
my.bankaccount.deposit(3000);
console.log(my);