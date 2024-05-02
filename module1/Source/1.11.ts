{
    // ternary operator || optional Chaining || Nullish coalescing

    const age : number = 18;

    if (age >= 18){
        console.log('adult')
    }else {
        console.log('not adult')
    }

    const isAdult = age >= 18 ? 'adult' : 'not Adult'

    console.log(isAdult)


    // nullish coalishing operator
    // based on null and undefined

    const isAuthenticated = ''

    const result1 = isAuthenticated ?? 'Guest'

    console.log({result1})

    const result2 = isAuthenticated ? isAuthenticated : 'Guest'

    console.log({result1}, {result2})

}