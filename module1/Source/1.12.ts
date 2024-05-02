{
    const searchName = (value: string) => {
        if (value) {
            console.log('Searching');
        } else {
            console.log('There is nothing to search')
        }
    }

    // unknown

    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1 `)
        }
        if (typeof value === 'string') {
            const [result, unit] = value.split(' ')
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1 `)
        }
        else {
            console.log('Wrong input')
        }
    }
    getSpeedInMeterPerSecond(`2000 kmh^-1`)


    // never type

      const throwError = (msg:string) : never => {
        throw new Error (msg)
      }

      throwError('Error ho gaya')

}