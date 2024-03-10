interface Customer {
    firstName: string;
    lastName: string;
}

let customer: Customer = {
    firstName: "John",
    lastName: "Smith"
};

console.log(`Hello ${customer.firstName} ${customer.lastName}!`);
