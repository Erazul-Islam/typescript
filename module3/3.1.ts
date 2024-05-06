{

  // class and object

  class Animal {
    name: string;
    species: string;
    sound: string

    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound
    }

    makeSound() {
      console.log(`the ${this} says ${this.sound}`)
    }
  }


  const dog = new Animal("German Shephard", 'dog', 'yeah')
  const cat = new Animal('Persian', 'cat', 'af')

  cat.makeSound()
}