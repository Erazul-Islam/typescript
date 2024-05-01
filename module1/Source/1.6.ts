const add = (num1: number, num2: number): number => num1 + num2

// If a object is belongs to the funciton then it is called method

const poorUser = {
    name: 'Taosif',
    balance: 9,
    addBalance (balance:number){
        return this.balance + balance
    }
}

const array : number[] = [1,2,3,4,5,67,]

const newArray = array.map((element:number):number => element*element)