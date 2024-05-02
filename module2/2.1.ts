{
    // type assertion

    let anything : any;
    anything = 'Next level web Development';

    anything = 222;

    (anything as number)

    const KgtoGram = (value:string | number) : string | number | undefined => {
        if(typeof value === 'string'){
            const convertedValue = parseFloat(value)
            return ` The converted value is ${convertedValue}`
        }
        if(typeof value === 'number'){
            return value * 1000
        }
    }

    const result1 = KgtoGram(1000) as number
    const result2 = KgtoGram("1000") as string

    type CustomError = {
        message : string
    }

    try{

    }catch(error){
        console.log((error as CustomError).message)
    }

}