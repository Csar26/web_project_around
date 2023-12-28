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
});


const addButton = document.querySelector(".add-button");
const popupaddElement = document.querySelector(".popup_content_edit_profile");



function tooglePopup(popup){
  popup.classList.toggle("popup_show");
}
  addButton.addEventListener("click", function () {
    tooglePopup(popupaddElement);
  });

  closeButton.addEventListener("click", function () {
    tooglePopup(popupaddElement);
  });

formProfile.addEventListener("submit", function(event){
  event.preventDefault();
  profileName.textContent = inputName.value;
  profilejob.textContent = inputjob.value;
  formProfile.reset();
  tooglePopup(popupProfile);
})

const cards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];

const container = document.querySelector(".elements");
cards.forEach(function (item){
const template = document.querySelector("#card-template").content;
const element = template.querySelector(".element").cloneNode(true);

const elementImage = element.querySelector(".element__image");
const elementTitle = element.querySelector(".element__title");

const buttonDelete = element.querySelector(".button_delete");
const buttonlike = element.querySelector(".element__like");

elementImage.src = item.link
elementTitle.innerText = item.name;

buttonDelete.addEventListener ("click", function (){
  element.remove();
});

elementLike.addEventListener("click", function() {
  elementLike.classList.toggle("element__like-click")
});



});