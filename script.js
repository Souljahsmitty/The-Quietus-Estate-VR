document.querySelectorAll(".thumbnails img").forEach(thumbnail => {
    thumbnail.addEventListener("click", function () {
        document.querySelector(".main-image img").src = this.src;
    });
});

document.getElementById("buy-button").addEventListener("click", () => {
    alert("Item added to cart!");
});
