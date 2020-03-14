let buttonsBuy = document.querySelectorAll(".product-action-buy");
let buttonCart = document.querySelector(".head-button-cart");

let buttonsBookmark = document.querySelectorAll(".product-action-bookmark");
let buttonBookmark = document.querySelector(".head-button-bookmark");

let userButtonLogin = document.querySelector(".user-button-log-in");
let userButtonLogout = document.querySelector(".user-button-log-out");

let popupShoppingCart = document.querySelector(".popup-shopping-cart");

let popupShoppingCartCloseButton = popupShoppingCart.querySelector(".popup-close-button");

let userNavigationBlocks = document.querySelectorAll(".user-navigation");
let userNavigationHandler = null;

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

for( let i = 0; i < buttonsBookmark.length; i++) {
  buttonsBookmark[i].onclick = function() {
    buttonBookmark.classList.add("not-empty");
  }
};

userNavigationHandler = function(evt) {
  evt.preventDefault();
  for( let i = 0; i < userNavigationBlocks.length; i++) {
    userNavigationBlocks[i].classList.toggle("user-navigation-hidden");
  }
};

userButtonLogin.addEventListener("click", userNavigationHandler);
userButtonLogout.addEventListener("click", userNavigationHandler);
