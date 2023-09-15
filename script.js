// JavaScript for handling chocolate selection and pricing

const chocolates = [
    {
        name: "Assorted Cocktail Mixer Pack",
        price: 799.00,
    },
    {
        name: "Bloody Mary Cocktail Mixer",
        price: 799.00,
    },
    {
        name: "Celebration Pack",
        price: 2499.00,
    },
    {
        name: "Complete Home Bar Kit",
        price: 1999.00,
    },
    {
        name: "Cosmopolitan Cocktail Mixer",
        price: 799.00,
    },
    {
        name: "Dewar's The New Old Fashioned Mix",
        price: 799.00,
    },
    {
        name: "Espresso Martini",
        price: 799.00,
    },
    {
        name: "Gin Cherry Sour",
        price: 799.00,
    },
    {
        name: "Gin Cherry Sour",
        price: 799.00,
    },
    {
        name: "Gin Cherry Sour",
        price: 799.00,
    },
    {
        name: "House Party Essentials",
        price: 799.00,
    },
    {
        name: "Jimmy's Bar Spoon with Garnish Fork",
        price: 799.00,
    },
    {
        name: "Jimmy's Gin Appreciation Pack",
        price: 799.00,
    },
    {
        name: "Jimmy's Matte Black Bar Blade",
        price: 799.00,
    },
    {
        name: "Jimmy's Matte Black Party Shaker",
        price: 799.00,
    },
    {
        name: "Jimmy's Matte Black Peg Measurer",
        price: 799.00,
    },
];

// Initialize the selected chocolates array
const selectedChocolates = [];

// Function to update the cart display
function updateCart() {
    const selectedChocolatesList = document.querySelector(".selected-chocolates");
    selectedChocolatesList.innerHTML = "";
    
    let totalPrice = 0;
    
    selectedChocolates.forEach((chocolate) => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.textContent = chocolate.name + " - ₹" + chocolate.price.toFixed(2);
        
        selectedChocolatesList.appendChild(listItem);
        
        totalPrice += chocolate.price;
    });
    
    const totalPriceDisplay = document.getElementById("total-price");
    totalPriceDisplay.textContent = "Total Price: ₹" + totalPrice.toFixed(2);
}
// Function to add a chocolate to the cart
function addToCart(chocolateIndex) {
    const selectedChocolate = chocolates[chocolateIndex];
    
    if (selectedChocolate) {
        // Check if the chocolate is already in the cart
        const existingItem = selectedChocolates.find(item => item.name === selectedChocolate.name);
        
        if (existingItem) {
            // If it exists, update the quantity
            existingItem.quantity += 1;
        } else {
            // If it doesn't exist, add it to the cart with quantity 1
            selectedChocolates.push({ ...selectedChocolate, quantity: 1 });
        }
        
        updateCart();
    }
}

// Add event listeners for the "Add to Cart" buttons
document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".btn-primary");
    
    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            addToCart(index);
        });
    });
    
    // Add event listener for the "Clear Selection" button
    const clearButton = document.getElementById("clear-button");
    clearButton.addEventListener("click", () => {
        clearCart();
    });
});
