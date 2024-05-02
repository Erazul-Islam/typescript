{

    // Type Alias

    type student = {
        name: string;
        age: number;
        gender: string;
        contact?: string;
        address: string
    }

    const student1: student = {
        name: 'Taosif',
        age: 21,
        gender: 'male',
        contact: '01987654',
        address: 'STAH'
    }

    const student2: student = {
        name: 'Vasani',
        age: 31,
        gender: 'male',
        contact: '019899094',
        address: 'SRH'
    }

    type UserName = string
    type IsAdmin = boolean
    const username : UserName = 'Taosif'
    const isAdmin : IsAdmin = false

    // functional alias

    type Sum = (num1:number, num2 : number) => number


    const add : Sum = (num1,num2) => num1 + num2

}