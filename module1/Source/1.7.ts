{
    // spread operator
    // rest operatior

    const bros1:string[] = ['mr.x', 'mr.y', 'mr.z']
    const bros2:string[] = ['mr.a', 'mr.b', 'mr.c']

    bros1.push(...bros2)


    const mentors = {
        typescript: 'mezba',
        redux : 'YTC'
    }

    const mentor = {
        typescript: 'mezba',
        redux : 'YTC'
    }

    const list = {
        ...mentors,
        ...mentor
    }

    console.log(list)

}