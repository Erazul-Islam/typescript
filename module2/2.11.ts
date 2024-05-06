{
    // utility type 

    // ommit

    // Required

    // Partial

    // Readonly

    type person = {
        name : string;
        age : number;
        email? : string
        contactNo : string
    }

    type Name = Pick <person, 'name'>

    type ContactInfo = Omit<person, "name" | "age">

    type PersonRequired = Required <person>

    type PersonPartial = Partial <person>

    type PersonReadOnly = Readonly<person>


    const person1 : person = {
        name : "Taosif",
        age : 89,
        contactNo : '34958'
    }

    type obj = Record<string,string>

    const object : obj = {
        a : 'a',
        b : 'b',
        c : 'x'
    }

    

}