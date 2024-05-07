{
    class Animal {
        name : string;
        species : string;

        constructor (name : string, species : string){
            this.name = name
            this.species = species
        }
        makeSound(){
            console.log('I am making sound')
        }
    }

    class Dog extends Animal {
        constructor(name :string ,species : string){
            super (name,species)
        }
        makeBurk(){
            console.log('A Barking dog seldom bites')
        }
    }

    class Cat extends Animal {
        constructor(name :string ,species : string){
            super (name,species)
        }
        makeMew(){
            console.log('A Barking cat seldom bites')
        }
    }

    const isDog = (animal : Animal) : animal is Dog => {
        return animal instanceof Dog
    }
    const isCat = (animal : Animal) : animal is Cat => {
        return animal instanceof Cat
    }

    const getAnimal = (animal : Animal) => {
        if(isDog(animal)){
            animal.makeBurk()
        }
        else if(isCat(animal)){
            animal.makeMew()
        }else{
            animal.makeSound()
        }
    }

    const dog = new Dog ("Dog", "dog")
    const cat = new Cat ("cat", "dog")

    getAnimal(cat)



}