const buttonEdit = document.querySelector(".profile__button");
const popupProfile = document.querySelector(".popup_content_edit_profile");
const closeButton = popupProfile.querySelector(".popup__button-close");

function tooglePopup(popup) {
  popup.classList.toggle("popup_show");

  buttonEdit.addEventListener("click", function () {
    tooglePopup(popupProfile);
  });

  closeButton.addEventListener("click", function () {
    tooglePopup(popupProfile);
  });
}
