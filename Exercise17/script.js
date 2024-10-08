class Product {

    constructor(name, category, price, stock = 0) {
        this.name = name
        this.category = category
        this.price = price
        this.stock = stock

        //Throw Exception for check category and stock
        //For validate Category
        const validCategories = ["Potion", "Wide", "Book"]
        if (!validCategories.includes(category)) {
            throw new Error("The category is invalid, the valid categories are: Potion, Wide, Book");
        }
        if (isNaN(stock)) {
            throw new Error("The stock is invalid, need a number");
        }
    }

    //For update stock of a product
    updateStock(stock) {
        if (isNaN(stock)) {
            throw new Error("The stock is invalid, need a number");
        }
        this.stock = stock;
        if (this.stock < 0) this.stock = 0;
    }
}

class Inventory {
    //In the cration of inventory you can add an array with values, or you can add with the method
    constructor(array = []) {
        this.array = array;
    }

    addProductInventory(product) {
        this.array.push(product);
    }

    //Delete a product for your name
    removeProductByName(name) {
        const index = this.array.findIndex(product => product.name === name);
        if (index !== -1) {
            this.array.splice(index, 1);
        } else {
            console.log(`Product with name ${name} not found.`);
        }
    }

    //Search a product for your name
    findProductByName(name) {
        const product = this.array.find(product => product.name === name);
        if (product) {
            console.log(product);
        } else {
            console.log(`Product with name ${name} not found.`);
        }
    }

}

try {
    //Create products
    const product1 = new Product('Black Clover', 'Book', 50);
    const product2 = new Product('Fire Potion', 'Potion', 30, 10);

    //Create and add to Inventory products
    const inventory = new Inventory();
    inventory.addProductInventory(product1);
    inventory.addProductInventory(product2);

    //Search product by name
    inventory.findProductByName('Black Clover');

    //Delete product by name
    inventory.removeProductByName('Fire Potion');

    //Add stock to book
    product1.updateStock(15)

    console.log(inventory.array);

} catch (error) {
    console.error(error.message);
}