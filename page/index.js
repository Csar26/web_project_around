import {
  closeButtonImage,
  togglePopup,
  formProfile,
  profileName,
  profileJob,
  inputJob,
  inputName,
  popupProfile,
  popupImage,
  popupAddElement,
  formNewCard,
  container,
  addButton,
  closeButtonNewPlace,
  overlays,
  cards,
  createCard,
  formValidatorProfile,
  formValidatorAddCard,
  buttonEdit,
  closeButton,
} from "../utils/utils.js";


closeButtonImage.addEventListener("click", function () {
  togglePopup(popupImage);
});

buttonEdit.addEventListener("click", function () {
  togglePopup(popupProfile);
});

closeButton.addEventListener("click", function () {
  togglePopup(popupProfile);
});
formProfile.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  formProfile.reset();
  togglePopup(popupProfile);
});

formNewCard.addEventListener("submit", (event) => {
  event.preventDefault();
  const item = {
    name: formNewCard.elements["title"].value,
    link: formNewCard.elements["link"].value,
  };
  const newCard = createCard(item);
  container.prepend(newCard);
  formNewCard.reset();
  togglePopup(popupAddElement);
});
addButton.addEventListener("click", function () {
  togglePopup(popupAddElement);
});
closeButtonNewPlace.addEventListener("click", function () {
  togglePopup(popupAddElement);
});

cards.forEach(function (item) {
  const newCard = createCard(item);
  container.append(newCard);
});

//cerrar con click overlay
overlays.forEach(function (overlay) {
  overlay.addEventListener("click", function (event) {
    const closePopup = overlay.closest(".popup");
    togglePopup(closePopup);
  });
});

formValidatorProfile.enableValidation();
formValidatorAddCard.enableValidation();
