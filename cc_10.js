//Task 1: Creating a Product Class
class Product {
    constructor (name, id, price, stock){ //Constructor initializes the product with the name, ID, price, and the stock quantity
        this.name = name;         //Storing the product name
        this.id = id;        //Storing the product ID
        this.price = price;        //Storing the product price
        this.stock = stock;        //Storing the available stock quantity
    }
    getDetails(){    //Method to return product details as a formatted string
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }
    updateStock(quantity){     //Method to update stock when an order is placed
        this.stock -= quantity;
    }
}

// Test case for Task 1
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"
prod1.updateStock(3);
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"

//Task 2: Creating an Order Class
class Order {
    constructor(orderId, product, quantity) {     //Constructor initializing an order with ID, product, and quantity
      this.orderId = orderId;         //Storing the order ID
      this.product = product;        //Storing the product being ordered
      this.quantity = quantity;        //Storing the ordered quantity
      this.totalPrice = this.calculateTotalPrice();        //Calculating the total order price
      
      this.product.updateStock(this.quantity);        //Reducing the stock of the product when the order is created
    }
  
    calculateTotalPrice() {
      return this.product.price * this.quantity;
    }
  
    getOrderDetails() {     //Method to return the order details as a formatted string
      return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}`;
    }
  }

// Test case for Task 2
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); // Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)

//Task 3: Creating an Inventory Class
class Inventory{
    constructor (){    //Constructor initializes an empty list of products and orders
        this.products = [];
    }
    addProduct(product){     //Method to add a product to the inventory
        this.products.push(product);
    }
    listProducts(){     //Method to display all products in the inventory
        this.products.forEach(prod => console.log(prod.getDetails()));
    }
}

//Test Case
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts(); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"

//Task 4: Implementing Order Management
placeOrder (orderId, product, quantity){     //Method to create and place an order for a product
    if (product.stock >= quantity){        //Ensuring that there is enough stock before placing the order
        const order = new Order(orderId, product,quantity);
        this.orders.push(order);            //Adding the new order to the list of orders
        console.log(`order placed successfully: ${order.getOrderDetails()}`);
    } else {
        console.log("insufficient stock for order.");             //Logging to the console if there is insufficient stock
    }
}
listOrders(){    //Method to display all orders placed in the inventory system
    this.orders.foreach(order =>{
        console.log(order.getOrderDetails());
    });
}

// Test case for Task 4
inventory.placeOrder(601, prod1, 2);
inventory.listOrders();
// Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails());
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"

//Task 5: Implementing Product Restocking
restockProduct(productId, quantity){    //Method to increase the stock of a product based on its product ID
    const product = this.products.find(prod => prod.id === productId);         //Searching for the product in the inventory by its ID
    if (product){         //If the product is found, increase its stock
        product.stock += quantity;
        console.log(`Product ${product.name} restocked. New Stock: ${product.stock}`)
    } else {
        console.log("product not found");
    }
}

//Test Case
inventory.restockProduct(101, 5);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 8"

  