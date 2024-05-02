{
    // interface, type vs Interface

    type User1 = {
        name: string;
        age: number
    };

    interface User2 {
        name: string;
        age: number
    }

    type UserWithRoll = User1 & { role: string }

    interface UserWithRoll2 extends User2 {
        role : string
    }

    const user1: UserWithRoll = {
        name: "Taosif",
        age: 100,
        role: 'Admin'
    }

    type Roll = number[];

    interface Roll2 {
        [index : number] : number
       }

    const rollNumber : Roll = [1,2,3]


    type Add = (num1 : number, num2 : number) => number

    interface Add2 {
        (num1:number, num2 : number) : number
    }

}