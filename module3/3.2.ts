{
    // inheritance

    class parent {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address
        }

        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`)
        }
    }

    class Student extends parent {

        constructor(name: string, age: number, address: string) {
            super(name,age,address)
        }

        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`)
        }
    }
    const student1 = new Student("Mr.student", 20, "BD")

    class Teacher {
    
        designation?: string

        constructor(name: string, age: number, address: string, designation: string) {
        
            this.designation = designation
        }

        TakeClass(numOfclass: number) {
            console.log(`${this} will take ${numOfclass}`)
        }
    }

    const cheater = new Teacher("Mr.student", 30, "BD", 'Professor')

}