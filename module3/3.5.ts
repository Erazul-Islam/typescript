{
    // Access modifiers

    class BankAccount{
       public readonly id : number;
       public name : string;
       private balance : number

        constructor (id : number, name : string, balance : number){
            this.id = id
            this.name = name
            this.balance = balance
        }

        addDeposit(amount : number){
            this.balance = this.balance + amount
        }

        getBalance () {
            return this.balance
        }

    }

    const poorAccount = new BankAccount(111,'Taosif',56000);
    poorAccount.addDeposit(5000)

    const myBalance = poorAccount.getBalance();
    console.log(myBalance)
     
}