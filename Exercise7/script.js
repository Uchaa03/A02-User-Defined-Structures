class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        return `Hello, my name is ${this.name} and i have ${this.age} years old`;
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name, age);
    }
    //Override Animal method
    talk() {
        return `Hello, my name is ${this.name}, i have ${this.age} years old and I\'m a dog`;
    }
}


class Cat extends Animal {
    constructor(name, age) {
        super(name, age);
    }
    //Override Animal method
    talk() {
        return `Hello, my name is ${this.name}, i have ${this.age} years old and I\'m a cat`;
    }
}

const animal1 = new Animal('Lula',8)
const animal2 = new Dog('Lupita',5)
const animal3 = new Cat('Nora',4)
alert(animal1.talk())
alert(animal2.talk())
alert(animal3.talk())
