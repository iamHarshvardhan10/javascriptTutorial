// class practice and extend keyword

class Animal {
    constructor(Name , age){
        this.Name = Name,
        this.age = age
    }

    about(){
        console.log(`Your Animal name is ${this.Name} and age is ${this.age }`)

    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }


}


class Cat extends Animal {

}

const cat = new Cat('Catty', 1)
console.log(cat)

console.log(cat.about())
console.log(cat.isCute())
console.log(cat.isSuperCute())

const animal1 = new Animal("tiger", 2)
console.log(animal1)

console.log(animal1.about())
console.log(animal1.isSuperCute())
console.log(animal1.isCute())