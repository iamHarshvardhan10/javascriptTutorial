// Getter and setter methods


class Person {
    constructor(firstName , lastName , age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName} ${this.age}`
    }

    set fullName(fullName){
        const [firstName , lastName] = fullName.split(" ")
        this.firstName = firstName;
        this.lastName = lastName;
    }

}


const person1 = new Person("harsh" , "bhosale" , 18)
console.log(person1)
console.log(person1.fullName)

person1.fullName = "Shree Vardhan"
console.log(person1)
console.log(person1.fullName)

// using get ke karan hum isse property ke tarah bhi use kr skte hai