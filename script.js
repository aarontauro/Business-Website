const toggleCatogory=()=>{
    console.log("hoverd")
    const dropdown=document.getElementById("dropdown-content");
    const list = dropdown.classList;
    list.toggle("active");
    setTimeout(() => {  list.toggle("active") },3000);
    
}

function toggleCart() {
    const cart = document.getElementById("cart");
    if (cart.style.display === "none" || cart.style.display === "") {
        cart.style.display = "block"; // Show the cart
    } else {
        cart.style.display = "none"; // Hide the cart
    }
}
