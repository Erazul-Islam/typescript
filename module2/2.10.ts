{
    // mapped type
    const arrayOfNumber : number[] = [1,2,34,5]
    // const arrayOfString : string[] = ['1','2','4']

    const arrayOfString : string[] = arrayOfNumber.map((number) => 
    number.toString())

    console.log(arrayOfString)

}