export class Customer {
    private firstName: string;
    private lastName: string;
    private age: string;

    constructor(firstName: string, lastName: string, age: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greeter(){
        console.log(`Hello ${customer.firstName} ${customer.lastName}!`);
    }

    getAge(){
        console.log(`You are ${customer.age} years old.`);
    }
}

let customer = new Customer("John", "Smith", "27");

