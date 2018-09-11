var linkLogin = document.querySelector(".login__link");
var popupLogin = document.querySelector(".login-submenu");
var formLogin = popupLogin.querySelector(".login-form");
var emailLogin = popupLogin.querySelector(".login-email");
var password = popupLogin.querySelector(".login-password");

var isStorageSupport = true;
var storage3 = "";

try {
  storage3 = localStorage.getItem("login-email");
} catch (err) {
  isStorageSupport = false;
}

linkLogin.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupLogin.classList.add("modal-show");

  if (storage3) {
    emailLogin.value = storage3;
    password.focus();
  } else {
    emailLogin.focus();
  }
});

formLogin.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!emailLogin.value || !password.value) {
    evt.preventDefault();
    popupLogin.classList.remove("modal-error");
    popupLogin.offsetWidth = popup.offsetWidth;
    popupLogin.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("login-email", emailLogin.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupLogin.classList.contains("modal-show")) {
      popupLogin.classList.remove("modal-show");
      popupLogin.classList.remove("modal-error");
    }
  }
});

var searchLink = document.querySelector(".search__link");
var searchForm = document.querySelector(".search__form");

searchLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchForm.classList.toggle("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (searchForm.classList.contains("modal-show")) {
      searchForm.classList.remove("modal-show");
    }
  }
});

/*spatial-lodge-216107*/

var coordinates = {lat: 59.938778, lng: 30.323056}
var pin = src="img/svg/pin.svg"

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: coordinates,
    zoom: 15
  }),

  marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: pin,
    animation: google.maps.Animation.DROP
  });
}

var contacts = document.querySelector(".button-contacts");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-close");
var feedbackOverlay = document.querySelector(".modal-overlay");

var form = popup.querySelector(".feedback-form");
var feedbackName = popup.querySelector(".feedback-name");
var feedbackEmail = popup.querySelector(".feedback-email");
var feedbackText = popup.querySelector(".feedback-text");

var isStorageSupport, storage, storage2;

try {
  isStorageSupport = true;
  storage  = localStorage.getItem("feedback-name");
  storage2 = localStorage.getItem("feedback-email");
} catch (err) {
  isStorageSupport = false;
  storage  = "";
  storage2 = "";
}

contacts.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  feedbackOverlay.classList.add("modal-overlay-show");

if (storage && storage2) {
    feedbackName.value = storage;
    feedbackEmail.value = storage2;
    feedbackText.focus();
  } else if (storage) {
    feedbackName.value = storage;
    feedbackEmail.focus();
  } else {
    feedbackName.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  feedbackOverlay.classList.remove("modal-overlay-show");
});

form.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("feedback-name", feedbackName.value);
    localStorage.setItem("feedback-email", feedbackEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
    if (feedbackOverlay.classList.contains("modal-overlay-show")) {
      feedbackOverlay.classList.remove("modal-overlay-show");
    }
  }
});
