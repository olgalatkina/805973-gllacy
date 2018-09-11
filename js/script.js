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
  popupLogin.classList.toggle("modal-show");

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

var body = document.querySelector(".main-page");

if (body) {
  var toggle1 = document.querySelector(".toggle-1");
  var toggle2 = document.querySelector(".toggle-2");
  var toggle3 = document.querySelector(".toggle-3");

  var slide1 = document.querySelector(".slide-1");
  var slide2 = document.querySelector(".slide-2");
  var slide3 = document.querySelector(".slide-3");

  toggle1.addEventListener("click", function (evt) {
    evt.preventDefault();

    toggle1.classList.add("toggle-on");
    toggle2.classList.remove("toggle-on");
    toggle3.classList.remove("toggle-on");

    body.classList.add("main-page1");
    body.classList.remove("main-page2");
    body.classList.remove("main-page3");

    slide1.classList.remove("visually-hidden");
    slide2.classList.add("visually-hidden");
    slide3.classList.add("visually-hidden");
  });

  toggle2.addEventListener("click", function (evt) {
    evt.preventDefault();

    toggle2.classList.add("toggle-on");
    toggle1.classList.remove("toggle-on");
    toggle3.classList.remove("toggle-on");

    body.classList.add("main-page2");
    body.classList.remove("main-page1");
    body.classList.remove("main-page3");

    slide2.classList.remove("visually-hidden");
    slide1.classList.add("visually-hidden");
    slide3.classList.add("visually-hidden");
  });

  toggle3.addEventListener("click", function (evt) {
    evt.preventDefault();

    toggle3.classList.add("toggle-on");
    toggle1.classList.remove("toggle-on");
    toggle2.classList.remove("toggle-on");

    body.classList.add("main-page3");
    body.classList.remove("main-page1");
    body.classList.remove("main-page2");

    slide3.classList.remove("visually-hidden");
    slide1.classList.add("visually-hidden");
    slide2.classList.add("visually-hidden");
  });
}

var contacts = document.querySelector(".button-contacts");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-close");
var feedbackOverlay = document.querySelector(".modal-overlay");

if (popup) {
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
}
