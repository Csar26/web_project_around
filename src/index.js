import "./styles/index.css";
import Popup from "./components/Popup.js";
import { PopupWithForm } from "./components/PopupWithForms.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import UserInfo from "./components/UserInfo.js";
import Card from "./components/Card.js";
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
  avatar,
} from "./utils/utils.js";
import Section from "./components/Section.js";
import { api } from "./utils/Api.js";
import PopupWithConfirmation from "./components/PopupWithConfirmation.js";
let currentUser = null;


function remoteDeleteCard(idCard) {
  popupWithConfirmation.open(() => {
    return api.deleteCard(idCard).then(() => {
      api.getCards().then((cards) => {
        section.setItems(cards);
        section.renderItems();
      });
    });
  });
}
    

function removeLikeCard(idCard) {
  return api.deleteLikeCard(idCard);
}

function addLikeCard(idCard) {
  return api.likeCard(idCard);
}

/*function createCard(item) {
  const newCard = new Card(
    item.name,
    item.link,
    ".card-template",
    (title, link) => {
      popupImage.open(title, link);
    }
  );
  return newCard.render();
}*/

function createCard(item) {
  const newCard = new Card(
    item.name,
    item.link,
    ".card-template",
    (title, link) => {
      popupImage.open(title, link);
    },
    addLikeCard,
    removeLikeCard,
    remoteDeleteCard,
    item,
    currentUser
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

api.getUserInfo().then((user) => {
  document.querySelector(".avatar").src = user.avatar;
  currentUser = user;
  api
  .getCards()
  .then((cards) => {
    section.setItems(cards);
  })
  .finally(() => {
    section.renderItems();
  });
})


const userInfo = new UserInfo(".profile__name", ".profile__job");

const popupProfile = new PopupWithForm(
  ".popup_content_edit-profile",
  ({ name, job }, buttonWithForm) => {
    return api.updateUser(name, job).then((user) => {
      userInfo.setUserInfo(name, job);
      buttonWithForm.textContent = "Save";
      popupProfile.close();
    });
  }
);

const popupAddElement = new PopupWithForm(
  ".popup_content_add-element",
  ({ title, link }, buttonWithForm) => {

   return api.addCard(link, title).then((card) => {
      const newCard = createCard(card);
      container.prepend(newCard);
      buttonWithForm.textContent = "Save";
      popupAddElement.close();
    });
  }
);

const popupImage = new PopupWithImage(".popup_content_image");

const popupWithConfirmation = new PopupWithConfirmation('.popup_content_confirmation');

const popupAvatar = new PopupWithForm(".popup_content_avatar", 
({link}) => {
  return api.changeavatar(link).then((user) => {
    document.querySelector(".avatar").src = user.avatar;
      popupAvatar.close();
    });

  });

popupAvatar.setEventListeners();
popupProfile.setEventListeners();
popupAddElement.setEventListeners();
popupImage.setEventListeners();
popupWithConfirmation.setEventListeners();

buttonEdit.addEventListener("click", function () {
  popupProfile.open();
});

addButton.addEventListener("click", function () {
  popupAddElement.open();
});

formValidatorProfile.enableValidation();
formValidatorAddCard.enableValidation();
section.renderItems();

document.querySelector(".profile__avatar-button-edit")
  .addEventListener("click", () => {
    popupAvatar.open();
  });
