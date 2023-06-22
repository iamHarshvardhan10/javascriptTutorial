// class keyword


class CreateUser {
    constructor(firstName , lastName , email , age){

        this.firstName = firstName,
        this.lastName = lastName,
        this.email = email,
        this.age = age
    }

    about(){
        return `${this.firstName} and ${this.age}`
    }

    is18(){
        return this.age >= 18;
    }

    sing(){
        return "lallalal"
    }
}


const user1 = new CreateUser("harsh", "bhosale", "hash@.com", 12)

console.log(user1)
console.log(Object.getPrototypeOf(user1))