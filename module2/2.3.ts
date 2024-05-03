{
    // generic type 

    // const rollNumber : number[] = [3,6,8]
    const rollNumber: Array<number> = [3, 6, 8]

    const mentors: string[] = ['Mr x', 'Mr. Y', "Mr.Z"]

    const boollArray: boolean[] = [true, false, true]

    // generic tuple

    type GenericTuple  <x,y> = [x,y]

    const man: GenericTuple<string,string> = ['MR. X', 'mr y']

    const UserWithId  = [123,{name: 'x', email : 'a@gmail.com'}]

}