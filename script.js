//your code here!
// Function to add 2 more list items to the end of the list
const list = document.getElementById("infi-list");
let i =0;
function addItemsToList() {
	    const li = document.createElement("li");
	    li.innerText = `Item ${++i}`;
		list.appendChild(li);
}


// Add about 10 list items by default
for (let i = 0; i <10; i++) {
    addItemsToList();
}

list.addEventListener("scroll", () => {
	let maxScroll = list.scrollHeight - list.clientHeight;
	let currentScrollTop = list.scrollTop;

	let thresold = Math.abs(maxScroll-currentScrollTop);
	if(thresold<=5){
		for (let i = 0; i < 2; i++) {
			addItemsToList();
		}
	}
});