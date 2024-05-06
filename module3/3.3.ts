{
    // type guards 

    // type --> type guard

    type Alphaneumeric = string | number

    const add = (param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric => {

        if (typeof param1 === 'number' && typeof param2 === "number") {
            return param1 + param2
        } else {
            return param1.toString() + param2.toString()
        }
    }
    const result1 = add(2, 3)
    console.log(result1)

    type NormalUser = {
        name : string
    }

    type AdminUser = {
        name : string;
        role : 'Admin'
    }

    const getUser = (user : NormalUser | AdminUser) => {
        
    }

}