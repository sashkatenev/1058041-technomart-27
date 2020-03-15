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

let feedbackForm = null;
let feedbackUserName = null;
let feedbackUserEmail = null;
let feedbackUserLetter = null;
let userNameText = "";
let userEmailText = "";
let isStorageSupport = true;

let closeButtonHandler = null;
let userNavigationBlocks = document.querySelectorAll(".user-navigation");
let userNavigationHandler = null;


function setCloseButtonHandler(popup, btn) {
  btn.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("popup-close");
    setTimeout (function () {
      popup.classList.remove("popup-show-flex");
      popup.classList.remove("popup-show-block");
      popup.classList.remove("popup-error");
    }, 400);
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    let popups = document.querySelectorAll(".popup-window");
    for (let i = 0; i < popups.length; i++) {
      popups[i].classList.add("popup-close");
      popups[i].classList.remove("popup-show-flex");
      popups[i].classList.remove("popup-show-block");
      popups[i].classList.remove("popup-error");
    }
  }
});

// кнопки "Купить"
for( let i = 0; i < buttonsBuy.length; i++) {
  buttonsBuy[i].onclick = function() {
    buttonCart.classList.add("not-empty");
    popupShoppingCart.classList.remove("popup-close");
    popupShoppingCart.classList.add("popup-show-flex");
  }
};

// кнопка "Закрыть" окна "Товар добавлен"
setCloseButtonHandler(popupShoppingCart, popupShoppingCartCloseButton);

// кнопка "Продолжить покупки" окна "Товар добавлен"
setCloseButtonHandler(popupShoppingCart, continueShoppingButton);

// кнопка "Заблудились? Напишите нам" и ссылка обратной связи
for(let i = 0; i < buttonsWriteUs.length; i++) {
  buttonsWriteUs[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    popupFeedback.classList.remove("popup-close");
    popupFeedback.classList.add("popup-show-flex");
  });
}

try {
  userNameText = localStorage.getItem("user_name");
  userEmailText = localStorage.getItem("user_email");
}
catch (err) {
  isStorageSupport = false;
}

// форма обратной связи
if (popupFeedback) {
  feedbackForm = popupFeedback.querySelector("form");
  feedbackUserName = popupFeedback.querySelector("[id=user_name]");
  feedbackUserEmail = popupFeedback.querySelector("[id=user_email]");
  feedbackUserLetter = popupFeedback.querySelector("[id=letter_text]");
  feedbackUserLetter.focus();
  if (userEmailText) {
    feedbackUserEmail.value = userEmailText;
  }
  else {
    feedbackUserEmail.focus();
  }
  if (userNameText) {
    feedbackUserName.value = userNameText;
  }
  else {
    feedbackUserName.focus();
  }

  feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackUserName.value || !feedbackUserEmail.value || !feedbackUserLetter.value) {
      evt.preventDefault();
      popupFeedback.classList.remove("popup-error");
      popupFeedback.offsetWidth = popupFeedback.offsetWidth;
      popupFeedback.classList.add("popup-error");
      if (feedbackUserLetter.value == "") {
        feedbackUserLetter.focus();
      }
      if (feedbackUserEmail.value == "") {
        feedbackUserEmail.focus();
      }
      if (feedbackUserName.value == "") {
          feedbackUserName.focus();
      }
    }
    else {
      if (isStorageSupport) {
        localStorage.setItem("user_name", feedbackUserName.value);
        localStorage.setItem("user_email", feedbackUserEmail.value);
      }
    }
  });
  popupFeedbackCloseButton = popupFeedback.querySelector(".popup-close-button");
  setCloseButtonHandler(popupFeedback, popupFeedbackCloseButton);
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
