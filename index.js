const buttonEdit = document.querySelector(".profile__button");
const popupProfile = document.querySelector(".popup_content_edit_profile");
const closeButton = popupProfile.querySelector(".popup__button-close");

const profileName = document.querySelector(".profile__name");
const profilejob = document.querySelector(".profile__job");
const formProfile = popupProfile.querySelector(".popup__form");
const inputName = popupProfile.querySelector(".form__input[name='name']");
const inputjob = popupProfile.querySelector(".form__input[name='job']");


function tooglePopup(popup){
  popup.classList.toggle("popup_show");
}
  buttonEdit.addEventListener("click", function () {
    tooglePopup(popupProfile);
  });

  closeButton.addEventListener("click", function () {
    tooglePopup(popupProfile);
  });

formProfile.addEventListener("submit", function(event){
  event.preventDefault();
  profileName.textContent = inputName.value;
  profilejob.textContent = inputjob.value;
  formProfile.reset();
  tooglePopup(popupProfile);
})