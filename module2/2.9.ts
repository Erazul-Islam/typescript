{
    type a1 = null
    type b1 = undefined

    type x = a1 extends null ? true : false

    type Sheikh = {
        bike : string;
        car : string;
        ship : string
        plane : string
    }

    

    type CheckVehicle <T> = T extends keyof Sheikh ? true : false

    type HasBike = CheckVehicle <'bike'>
}