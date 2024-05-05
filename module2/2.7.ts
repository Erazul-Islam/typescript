{
    //    Generic constrainst with keyof operator

    type vehicle = {
        bike: string;
        car: string;
        ship: string
    }

    type owner = "Bike" | "Car" | 'Ship'

    type owne2 = keyof vehicle

    const person1: owne2 = "bike"

    function getvalue <X,Y extends "name" | "age" | "address"> (obj: X, key: Y) {
        return obj[key]
    }

    const user = {
        name: 'Taosif',
        age: 21,
        address: 'dhaka'
    }

    const result = getvalue(user, 'name')

    // obj['age] 26



    // user['age'] = 


}