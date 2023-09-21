//your code here!
// Function to add 2 more list items to the end of the list
function addItemsToList() {
    const list = document.getElementById("list");

    // Add 2 more list items
    for (let i = 0; i < 2; i++) {
        const newItem = document.createElement("li");
        newItem.textContent = `Item ${list.children.length + 1}`;
        list.appendChild(newItem);
    }
}

// Add about 10 list items by default
for (let i = 1; i <=10; i++) {
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${i}`;
    document.getElementById("list").appendChild(newItem);
}

// Attach a scroll event listener to the window
window.addEventListener("scroll", function () {
    const list = document.getElementById("list");

    // Check if the user has reached the end of the list
    if (window.innerHeight + window.scrollY >= list.clientHeight + list.offsetTop) {
        // Add 2 more list items when the user reaches the end
        addItemsToList();
    }
});

