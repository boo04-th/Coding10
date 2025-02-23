//Task 1: Creating a Product Class
class Product {
    constructor (name, id, price, stock){
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }
    getDetails(){
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }
    updateStock(quantity){
        if (this.stock >= quantity){
            this.stock -= quantity;
        } else {
            console.log("Insufficient stock available.");
        }
    }
}

// Test case for Task 1
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"
prod1.updateStock(3);
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"

//Task 2: Creating an Order Class
class Order {
    constructor(orderId, product, quantity){ //Constructor setting up specified properties
        if (product.stock >=quantity){
            this.orderId = orderId;
            this.product = product;
            this.quantity = quantity;
            this.totalPrice = product.price * quantity;
            product.updateStock(quanity);
        } else {
            throw new Error ("Order cannot be placed due to insufficient stock.");
        }
    }
    getOrderDetails() { //Add a method getOrderDetails()
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}`; //Returns a formatted string of order details
    }
}

// Test case for Task 2
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); // Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)
