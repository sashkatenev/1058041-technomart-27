let buttonsBuy = document.querySelectorAll(".product-action-buy");
let buttonCart = document.querySelector(".head-button-cart");

let popupShoppingCart = document.querySelector(".popup-shopping-cart");

let popupShoppingCartCloseButton = popupShoppingCart.querySelector(".popup-close-button");

for( let i = 0; i < buttonsBuy.length; i++) {
  buttonsBuy[i].onclick = function() {
    buttonCart.classList.add("not-empty");
    popupShoppingCart.classList.add("popup-show-flex");
  }
};

popupShoppingCartCloseButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupShoppingCart.classList.remove("popup-show-flex");
});
