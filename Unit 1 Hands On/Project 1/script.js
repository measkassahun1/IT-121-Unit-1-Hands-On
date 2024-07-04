// Declare variables using var, let, and const
const productList = document
  .getElementById("product-list");
const addProductButton = document.getElementById("addProduct");
const removeProductButton = document.getElementById("removeProduct");
const productNameInput = document.getElementById("productName");
const productModelInput = document.getElementById("productModel");
const productCostInput = document.getElementById("productCost");
const productQuantityInput = document.getElementById("productQuantity");

// Create an array to hold the inventory of store items
let inventory = [];

// Create product objects
let product1 = {
    name: "Smart Phone",
    model: "IPhone 14",
    cost: 899.99,
    quantity: 10
};

let product2 = {
    name: "Smart Phone",
    model: "IPhone 15",
    cost: 999.99,
    quantity: 5
};

let product3 = {
    name: "Smart Phone",
    model: "IPhone 13",
    cost: 499.99,
    quantity: 8
};

// Add the product objects to the inventory array
inventory.push(product1, product2, product3);

// Function to display the inventory data in the HTML table
function displayInventory() {
    productList.innerHTML = ''; // Clear existing rows

    inventory.forEach(product => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.model}</td>
            <td>$${product.cost.toFixed(2)}</td>
            <td>${product.quantity}</td>
        `;
        productList.appendChild(row);
    });
}

// Event handler to add a new product
function addProduct() {
    const name = productNameInput.value.trim();
    const model = productModelInput.value.trim();
    const cost = parseFloat(productCostInput.value);
    const quantity = parseInt(productQuantityInput.value, 10);

    if (name && model && !isNaN(cost) && !isNaN(quantity)) {
        const newProduct = { name, model, cost, quantity };
        inventory.push(newProduct);
        displayInventory();
        productNameInput.value = '';
        productModelInput.value = '';
        productCostInput.value = '';
        productQuantityInput.value = '';
    } else {
        alert('Please fill in all fields with valid values.');
    }
}

// Event handler to remove a product
function removeProduct() {
    const name = productNameInput.value.trim();
    const model = productModelInput.value.trim();
    const quantityToRemove = parseInt(productQuantityInput.value, 10);
  
    if (name && model && !isNaN(quantityToRemove) && quantityToRemove > 0) {
      // Find product in inventory
      const productIndex = inventory.findIndex(
        (product) => product.name === name && product.model === model
      );
  
      if (productIndex !== -1) {
        const existingProduct = inventory[productIndex];
  
        if (existingProduct.quantity >= quantityToRemove) {
          // Reduce quantity of the existing product
          existingProduct.quantity -= quantityToRemove;
  
          // If quantity=0 or quantity<0, remove the product
          if (existingProduct.quantity === 0) {
            inventory.splice(productIndex, 1);
          }
  
          // Update input values
          displayInventory();
          productNameInput.value = "";
          productModelInput.value = "";
          productCostInput.value = "";
          productQuantityInput.value = "";
        } else {
          alert("Quantity to remove exceeds available quantity in catalog.");
        }
      } else {
        alert("Product not found in catalog.");
      }
    } else {
      alert("Please fill in all fields with valid values.");
    }
}

// Add event listeners
addProductButton.addEventListener('click', addProduct);
removeProductButton.addEventListener("click", removeProduct);

// Initial display of inventory
displayInventory();
