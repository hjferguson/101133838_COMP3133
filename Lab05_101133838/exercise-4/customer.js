"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(customer.firstName, " ").concat(customer.lastName, "!"));
    };
    Customer.prototype.getAge = function () {
        console.log("You are ".concat(customer.age, " years old."));
    };
    return Customer;
}());
exports.Customer = Customer;
var customer = new Customer("John", "Smith", "27");
