var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(customer.firstName, " ").concat(customer.lastName, "!"));
    };
    return Customer;
}());
var customer = new Customer("John", "Smith");
customer.greeter();
