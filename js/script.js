// список переменных
let buttonsBuy = document.querySelectorAll(".product-action-buy");
let buttonCart = document.querySelector(".head-button-cart");

let buttonsBookmark = document.querySelectorAll(".product-action-bookmark");
let buttonBookmark = document.querySelector(".head-button-bookmark");

let userButtonLogin = document.querySelector(".user-button-log-in");
let userButtonLogout = document.querySelector(".user-button-log-out");
let linkMap = document.querySelector(".contacts-map");
let buttonsWriteUs = document.querySelectorAll(".write-us");

let popupShoppingCart = document.querySelector(".popup-shopping-cart");
let popupFeedback = document.querySelector(".popup-feedback");
let popupMap = document.querySelector(".popup-map");

let popupShoppingCartCloseButton = popupShoppingCart.querySelector(".popup-close-button");
let continueShoppingButton = popupShoppingCart.querySelector("[id=continue_shopping]");
let popupFeedbackCloseButton = null;
let popupMapCloseButton = null;

let feedbackForm = null;
let feedbackUserName = null;
let feedbackUserEmail = null;
let feedbackUserLetter = null;
let userNameText = "";
let userEmailText = "";
let isStorageSupport = true;

let userNavigationBlocks = document.querySelectorAll(".user-navigation");
let userNavigationHandler = null;

let formFilterLabels = document.querySelectorAll(".form-filter label");

let linksCategorySorting = document.querySelectorAll(".sort-bar-byproperty a");
let linksDirectionSorting = document.querySelectorAll(".sort-bar-bydirection a");

var serviceSlider = document.querySelector(".service-slider");
var promoSlider = document.querySelector(".promo-slider");
var priceSlider = document.querySelector(".price-slider");

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
for (let i = 0; i < buttonsBuy.length; i++) {
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
for (let i = 0; i < buttonsWriteUs.length; i++) {
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

// форма с картой
if (linkMap) {
  linkMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("popup-close");
    popupMap.classList.add("popup-show-block");
  });
  popupMapCloseButton = popupMap.querySelector(".popup-close-button");
  setCloseButtonHandler(popupMap, popupMapCloseButton);
}

// кнопки "В закладки"
for (let i = 0; i < buttonsBookmark.length; i++) {
  buttonsBookmark[i].onclick = function() {
    buttonBookmark.classList.add("not-empty");
  }
};

// обработчик ссылок "Войти" и "Выход"
userNavigationHandler = function(evt) {
  evt.preventDefault();
  for (let i = 0; i < userNavigationBlocks.length; i++) {
    userNavigationBlocks[i].classList.toggle("user-navigation-hidden");
  }
};

userButtonLogin.addEventListener("click", userNavigationHandler);
userButtonLogout.addEventListener("click", userNavigationHandler);

// фокус на флажках и переключателях
if (formFilterLabels) {
  for (let i = 0; i < formFilterLabels.length; i++) {
    formFilterLabels[i].addEventListener("keydown", function (evt) {
      if (evt.keyCode === 13 || evt.keyCode === 32) {
        evt.preventDefault();
        this.click();
      }
    });
  }
}

// ссылки на панели сортировки
if (linksCategorySorting) {
  for (let i = 0; i < linksCategorySorting.length; i++) {
    linksCategorySorting[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      let currentActive = document.querySelector(".sort-bar-byproperty a.sort-property-active");
      currentActive.classList.remove("sort-property-active");
      currentActive.setAttribute("href", "#");
      this.classList.add("sort-property-active");
      this.removeAttribute("href");
    });
  }
}

if (linksDirectionSorting) {
  for (let i = 0; i < linksDirectionSorting.length; i++) {
    linksDirectionSorting[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      let currentActive = document.querySelector(".sort-bar-bydirection a.sort-direction-active");
      currentActive.classList.remove("sort-direction-active");
      currentActive.setAttribute("href", "#");
      this.classList.add("sort-direction-active");
      this.removeAttribute("href");
    });
  }
}

// сервис-слайдер:
if (serviceSlider) {
  // let backgroundImages = ["url('img/delivery.png')", "url('img/guarantee.png')", "url('img/credit.png')"];

  let serviceSliderItems = serviceSlider.querySelectorAll(".service-slider-item");
  for (let j = 0; j < serviceSliderItems.length; j++) {
    serviceSliderItems[j].setAttribute("data-number", j);
  }

  let serviceSliderControls = serviceSlider.querySelectorAll(".service-slider-controls p");
  for (let i = 0; i < serviceSliderControls.length; i++) {
    serviceSliderControls[i].setAttribute("data-number", i);
    serviceSliderControls[i].addEventListener("click", function (evt) {
      let currentNameActive = serviceSlider.querySelector(".service-slider-controls .name-item-active");
      currentNameActive.removeAttribute("class");
      this.classList.add("name-item-active");

      let sliderItemActive = serviceSlider.querySelector(".slider-item-active");
      sliderItemActive.classList.remove("slider-item-active");
      serviceSlider.querySelector(".service-slider-item[data-number='" + this.dataset.number + "']").classList.add("slider-item-active");

      // serviceSlider.querySelector(".service-slider-list").style.backgroundImage = backgroundImages[i];
    });

    serviceSliderControls[i].addEventListener("keydown", function (evt) {
      if (evt.keyCode === 13 || evt.keyCode === 32) {
        evt.preventDefault();
        this.click();
      }
    });
  }
}

// промослайдер:
if (promoSlider) {
  let promoSliderItems = promoSlider.querySelectorAll(".promo-slider-item");
  for (let i = 0; i < promoSliderItems.length; i++) {
    promoSliderItems[i].setAttribute("data-number", i);
    let newPointer = document.createElement("a");
    newPointer.setAttribute("data-number", i);
    newPointer.setAttribute("aria-label", "Переключатель слайда номер " + (i+1));
    if (promoSliderItems[i].classList.contains("slider-item-active")) {
      newPointer.classList.add("slider-pointer-active");
    }
    else {
      newPointer.setAttribute("href", "#");
    }
    newPointer.addEventListener("click", function (evt) {
      evt.preventDefault();
      let activePointer = promoSlider.querySelector(".slider-pointer-active");
      activePointer.classList.remove("slider-pointer-active");
      activePointer.setAttribute("href", "#");
      this.classList.add("slider-pointer-active");
      this.removeAttribute("href");
      promoSlider.querySelector(".slider-item-active").classList.remove("slider-item-active");
      promoSlider.querySelector(".promo-slider-item[data-number='" + this.dataset.number + "']").classList.add("slider-item-active");
    });
    promoSlider.querySelector(".slider-pointers").appendChild(newPointer);
  }

  // стрелки < и >:
  let arrows = promoSlider.querySelectorAll(".slider-arrow");
  for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", function () {
      let activePointer = promoSlider.querySelector(".slider-pointer-active");
      let current = +activePointer.dataset.number;
      let step = +this.dataset.step;
      let n = promoSlider.querySelectorAll(".promo-slider-item").length;
      promoSlider.querySelector(".slider-pointers a[data-number='" + ((current + step + n) % n) + "']").click();
    });
  }
}

if (priceSlider) {
  
}
