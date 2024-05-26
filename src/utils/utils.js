import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
export const buttonEdit = document.querySelector(".profile__button");
export const popupProfile = document.querySelector(
  ".popup_content_edit-profile"
);
export const closeButton = popupProfile.querySelector(".popup__button-close");
export const avatar = document.querySelector(".popup_content_avatar");

export const profileName = document.querySelector(".profile__name");
export const profileJob = document.querySelector(".profile__job");
export const formProfile = popupProfile.querySelector(".popup__form");
export const inputName = popupProfile.querySelector(".form_input[name='name']");
export const inputJob = popupProfile.querySelector(".form_input[name='job']");

export const popupImage = document.querySelector(".popup_content_image");
export const closeButtonImage = popupImage.querySelector(
  ".popup__button-close"
);
export const addButton = document.querySelector(".add-button");
export const popupAddElement = document.querySelector(
  ".popup_content_add-element"
);
export const closeButtonNewPlace = popupAddElement.querySelector(
  ".popup__button-close"
);
const formProfileNewPlace = popupAddElement.querySelector(".popup__form");
const inputNameNewPlace = popupAddElement.querySelector(
  ".form_input[name='title']"
);
const inputJobNewPlace = popupAddElement.querySelector(
  ".form_input[name='image Url']"
);
export const formNewCard = popupAddElement.querySelector(".popup__form");
export const container = document.querySelector(".elements");

export const cards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

const formConfig = {
  formSelector: ".popup__form",
  inputSelector: ".form_input",
  submitButtonSelector: ".form_submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "form_input_has-error",
  errorClass: "form_error_index-",
};

export const closePopup = document.querySelector(".popup");

export const overlays = Array.from(
  document.querySelectorAll(".popup__overlay")
);

export const formValidatorProfile = new FormValidator(formProfile, formConfig);
export const formValidatorAddCard = new FormValidator(formNewCard, formConfig);

export function togglePopup(popup) {
  if (popup.classList.contains("popup_show")) {
    document.removeEventListener("keypress", pressEscapeHandler);
  } else {
    document.addEventListener("keypress", pressEscapeHandler);
  }
  popup.classList.toggle("popup_show");
}


export function createCardOld(item) {
  const template = document.querySelector(".card-template").content;
  const element = template.querySelector(".element").cloneNode(true);

  const elementImage = element.querySelector(".element__image");
  const elementTitle = element.querySelector(".element__title");

  const buttonDelete = element.querySelector(".button-delete");
  const buttonLike = element.querySelector(".element__like");

  elementImage.src = item.link;
  elementTitle.textContent = item.name;
  elementImage.alt = item.name;

  buttonDelete.addEventListener("click", function () {
    element.remove();
  });

  buttonLike.addEventListener("click", function () {
    buttonLike.classList.toggle("element__like-click");
  });

  elementImage.addEventListener("click", function () {
    popupImage.querySelector(".popup__image").src = item.link;
    popupImage.querySelector(".popup__title").textContent = item.name;
    popupImage.querySelector(".popup__image").alt = item.name;
    togglePopup(popupImage);
  });
  return element;
}

function pressEscapeHandler(event) {
  if (event.key === "Escape") {
    const popups = document.querySelectorAll(".popup");
    popups.forEach(function (popup) {
      if (popup.classList.contains("popup_show")) {
        togglePopup(popup);
      }
    });
  }
}

