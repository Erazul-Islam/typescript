{
    // polymorphism

    class Person {
        GetSleep() {
            console.log('I am sleeping at 8 hour per Day')
        }
    }

    class Student extends Person {
        GetSleep() {
            console.log('I am sleeping at 7 hour per Day')
        }
    }

    class Developer extends Person {
        GetSleep() {
            console.log('I am sleeping at 6 hour per Day')
        }
    }

    const getSleepignHours = (param: Person) => {
        param.GetSleep()
    }

    const person1 = new Person()
    const person2 = new Student()
    const person3 = new Developer()

    getSleepignHours(person1)
    getSleepignHours(person2)
    getSleepignHours(person3)

    class Shape {
        getArea(): number {
            return 0;
        }
    }

    class Circle extends Shape {

        radius: number;

        constructor(radius: number) {
            super()
            this.radius = radius
        }

        getArea(): number {
            return Math.PI * this.radius * this.radius
        }
    }


    class Rectangle extends Shape {

        height: number;
        width: number;

        constructor(height : number, width : number) {
            super()
            this.height = height
            this.width = width
        }

        getArea(): number {
            return this.height * this.width
        }
    }

    const shapeArea = (param : Shape)=> {
        console.log(param.getArea())
    }

    const shape1 = new Shape()
    const shape2 = new Circle(10)
    const shape3 = new Rectangle(10,20)

    shapeArea(shape1)
    shapeArea(shape2)
    shapeArea(shape3)

}