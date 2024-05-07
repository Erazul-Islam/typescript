{
    // Abstraction

    interface Vehicle1 {
        startEngine(): void,
        stopEngine(): void;
        move(): void
    }

    class Car implements Vehicle1 {
        startEngine(): void {
            console.log('I am starting car')
        }

        stopEngine(): void {
            console.log('I am stopping the car')
        }
        move(): void {
            console.log('I am moving the car')
        }
        test() {
            console.log('I am just testing')
        }
    }

    const toyotaCar = new Car()
    toyotaCar.startEngine()

    abstract class Vehicle2 {
        abstract startEngine(): void 
        abstract stopEngine(): void 
        abstract move(): void 
    }

    
}