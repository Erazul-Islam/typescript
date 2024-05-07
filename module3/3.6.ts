{
    // Getter and Setter

    class BankAccount {
        public readonly id: number;
        public name: string;
        protected balance: number

        constructor(id: number, name: string, balance: number) {
            this.id = id
            this.name = name
            this.balance = balance
        }

        // addDeposit(amount: number) {
        //     this.balance = this.balance + amount
        // }

        // getBalance() {
        //     return this.balance
        // }

        get Balance(){
            return this.balance
        }

    }

    class studentAccount extends BankAccount {
        test() {
            this.balance
        }
    }

    

    const poorAccount = new BankAccount(111, 'Taosif', 56000);
    // poorAccount.addDeposit(5000)

    // const myBalance = poorAccount.getBalance();

    const myBal = poorAccount.Balance
    console.log(myBal)

}