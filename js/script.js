let buttonsBuy = document.querySelectorAll(".product-action-buy");
let buttonCart = document.querySelector(".head-button-cart");

let buttonsBookmark = document.querySelectorAll(".product-action-bookmark");
let buttonBookmark = document.querySelector(".head-button-bookmark");

let userButtonLogin = document.querySelector(".user-button-log-in");
let userButtonLogout = document.querySelector(".user-button-log-out");
let buttonsWriteUs = document.querySelectorAll(".write-us");

let popupShoppingCart = document.querySelector(".popup-shopping-cart");
let popupFeedback = document.querySelector(".popup-feedback");

let popupShoppingCartCloseButton = popupShoppingCart.querySelector(".popup-close-button");
let continueShoppingButton = popupShoppingCart.querySelector("[id=continue_shopping]");
let popupFeedbackCloseButton = null;

let userNavigationBlocks = document.querySelectorAll(".user-navigation");
let userNavigationHandler = null;

// кнопки "Купить"
for( let i = 0; i < buttonsBuy.length; i++) {
  buttonsBuy[i].onclick = function() {
    buttonCart.classList.add("not-empty");
    popupShoppingCart.classList.add("popup-show-flex");
  }
};

// кнопка "Закрыть" окна "Товар добавлен"
popupShoppingCartCloseButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupShoppingCart.classList.remove("popup-show-flex");
});

// кнопка "Продолжить покупки" окна "Товар добавлен"
continueShoppingButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupShoppingCart.classList.remove("popup-show-flex");
});

// кнопка "Заблудились? Напишите нам" и ссылка обратной связи
for(let i = 0; i < buttonsWriteUs.length; i++) {
  buttonsWriteUs[i].addEventListener("click", function(evt) {
    evt.preventDefault();
      popupFeedback.classList.add("popup-show-flex");
  });
}

// кнопка "Закрыть" формы обратной связи
if(popupFeedback) {
  popupFeedbackCloseButton = popupFeedback.querySelector(".popup-close-button");
  popupFeedbackCloseButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupFeedback.classList.remove("popup-show-flex");
  });
}

// кнопки "В закладки"
for( let i = 0; i < buttonsBookmark.length; i++) {
  buttonsBookmark[i].onclick = function() {
    buttonBookmark.classList.add("not-empty");
  }
};

// обработчик ссылок "Войти" и "Выход"
userNavigationHandler = function(evt) {
  evt.preventDefault();
  for( let i = 0; i < userNavigationBlocks.length; i++) {
    userNavigationBlocks[i].classList.toggle("user-navigation-hidden");
  }
};

userButtonLogin.addEventListener("click", userNavigationHandler);
userButtonLogout.addEventListener("click", userNavigationHandler);
