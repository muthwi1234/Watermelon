// Get references to the HTML elements
const watermelon = document.getElementById("watermelon");
const message = document.getElementById("message");

// Function to handle eating the watermelon
function eatWatermelon() {
    // Scale down the watermelon when eaten
    watermelon.style.transform = "scale(0.9)";
    
    // Display a message
    message.textContent = "Yum! Watermelon is delicious!";
    
    // Reset the watermelon and message after a delay
    setTimeout(() => {
        watermelon.style.transform = "scale(1)";
        message.textContent = "Click to eat";
    }, 1000);
}

// Add a click event listener to the watermelon
watermelon.addEventListener("click", eatWatermelon);
