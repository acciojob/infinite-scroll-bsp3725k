let ol = document.getElementById("infi-list");

// Add 10 initial list items
for (let i = 2; i <= 10; i++) {
    let newItem = document.createElement("li");
    newItem.textContent = `Item ${i}`;
    ol.appendChild(newItem);
}

// Variable to track item count
let itemCount = 10;

// Function to add 2 more items
function addMoreItems() {
    for (let i = 0; i < 2; i++) {
        itemCount++;
        let newItem = document.createElement("li");
        newItem.textContent = `Item ${itemCount}`;
        ol.appendChild(newItem);
    }
}

// Event listener for infinite scrolling
window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    // Check if user has scrolled to the bottom
    if (scrollTop + clientHeight >= scrollHeight - 5) {
        addMoreItems();
    }
});
