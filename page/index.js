import Popup from "../components/Popup.js";
import { PopupWithForm } from "../components/PopupWithForms.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Card from "../components/Card.js";
import {
  closeButtonImage,
  togglePopup,
  formProfile,
  profileName,
  profileJob,
  inputJob,
  inputName,
  formNewCard,
  container,
  addButton,
  closeButtonNewPlace,
  overlays,
  cards,
  formValidatorProfile,
  formValidatorAddCard,
  buttonEdit,
  closeButton,
} from "../utils/utils.js";
import Section from "../components/Section.js";

function createCard(item) {
  const newCard = new Card(
    item.name,
    item.link,
    ".card-template",
    (title, link) => {
      popupImage.open(title, link);
    }
  );
  return newCard.render();
}

const section = new Section(
  {
    items: cards,
    renderer: (item) => {
      const newCard = createCard(item);
      section.addItem(newCard);
    },
  },
  ".elements"
);

const userInfo = new UserInfo(".profile__name", ".profile__job");

const popupProfile = new PopupWithForm(
  ".popup_content_edit-profile",
  ({ name, job }) => {
    userInfo.setUserInfo(name, job);
  }
);

const popupAddElement = new PopupWithForm(
  ".popup_content_add-element",
  ({ title, link }) => {
    const item = {
      name: title,
      link: link,
    };
    const newCard = createCard(item);
    container.prepend(newCard);
  }
);

const popupImage = new PopupWithImage(".popup_content_image");

popupProfile.setEventListeners();
popupAddElement.setEventListeners();
popupImage.setEventListeners();

/*
closeButtonImage.addEventListener("click", function () {
  togglePopup(popupImage);
});
*/
buttonEdit.addEventListener("click", function () {
  popupProfile.open();
});
/*
closeButton.addEventListener("click", function () {
  togglePopup(popupProfile);
});
*/
/*
formProfile.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  formProfile.reset();
  //togglePopup(popupProfile);
});
*/
/*
formNewCard.addEventListener("submit", (event) => {
  event.preventDefault();
  const item = {
    name: formNewCard.elements["title"].value,
    link: formNewCard.elements["link"].value,
  };
  const newCard = createCard(item);
  container.prepend(newCard);
  formNewCard.reset();
  //togglePopup(popupAddElement);
});
*/
addButton.addEventListener("click", function () {
  //togglePopup(popupAddElement);
  popupAddElement.open();
});
/*
closeButtonNewPlace.addEventListener("click", function () {
  //togglePopup(popupAddElement);
});
*/
/*
cards.forEach(function (item) {
  const newCard = createCard(item);
  container.append(newCard);
});
*/

//cerrar con click overlay
/*
overlays.forEach(function (overlay) {
  overlay.addEventListener("click", function (event) {
    const closePopup = overlay.closest(".popup");
    togglePopup(closePopup);
  });
});
*/

formValidatorProfile.enableValidation();
formValidatorAddCard.enableValidation();
section.renderItems();