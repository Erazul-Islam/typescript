{
    // mapped type
    const arrayOfNumber : number[] = [1,2,34,5]
    // const arrayOfString : string[] = ['1','2','4']

    const arrayOfString : string[] = arrayOfNumber.map((number) => 
    number.toString())

    console.log(arrayOfString)

    type AreaNumber = {
        height : number;
        width : number
    }

    type AreaString<T>  = {
        [key in keyof T] : T
    }

    type height = AreaNumber['height']

    const area1 : AreaString<{height : string; width: number}>
    height : '100'
    weight : 50

}