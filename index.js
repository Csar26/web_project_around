const buttonEdit = document.querySelector(".profile__button");
const popupProfile = document.querySelector(".popup_content_edit-profile");
const closeButton = popupProfile.querySelector(".popup__button-close");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const formProfile = popupProfile.querySelector(".popup__form");
const inputName = popupProfile.querySelector(".form_input[name='name']");
const inputJob = popupProfile.querySelector(".form_input[name='job']");

const popupImage = document.querySelector(".popup_content_image");
const closeButtonImage = popupImage.querySelector(".popup__button-close");

closeButtonImage.addEventListener("click", function () {
  tooglePopup(popupImage);
});

function tooglePopup(popup) {
  popup.classList.toggle("popup_show");
}
buttonEdit.addEventListener("click", function () {
  tooglePopup(popupProfile);
});

closeButton.addEventListener("click", function () {
  tooglePopup(popupProfile);
});

formProfile.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  formProfile.reset();
  tooglePopup(popupProfile);
});

const addButton = document.querySelector(".add-button");
const popupAddElement = document.querySelector(".popup_content_add-element");
const closeButtonNewPlace = popupAddElement.querySelector(
  ".popup__button-close"
);
const formProfileNewPlace = popupAddElement.querySelector(".popup__form");
const inputNameNewPlace = popupAddElement.querySelector(
  ".form_input[name='title']"
);
const inputJobNewPlace = popupAddElement.querySelector(
  ".form_input[name='image Url']"
);
const formNewCard = popupAddElement.querySelector(".popup__form");

formNewCard.addEventListener("submit", (event) => {
  event.preventDefault();
  const item = {
    name: formNewCard.elements["title"].value,
    link: formNewCard.elements["link"].value,
  };
  const newCard = createCard(item);
  container.prepend(newCard);
  formNewCard.reset();
  tooglePopup(popupAddElement);
});

addButton.addEventListener("click", function () {
  tooglePopup(popupAddElement);
});

closeButtonNewPlace.addEventListener("click", function () {
  tooglePopup(popupAddElement);
});

const cards = [
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

const container = document.querySelector(".elements");

function createCard(item) {
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
    tooglePopup(popupImage);
  });
  return element;
}

cards.forEach(function (item) {
  const newCard = createCard(item);
  container.append(newCard);
});
/*
formProfile.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  formProfile.reset();
  tooglePopup(popupAddElement);
  
 
  




popupImage.addEventListener("click", function (){
popup.classList.toggle("popup_show");

popupImage.append(elementImage)

});

/*
addButton.addEventListener("click", function () {
  tooglePopup(popupAddElement);
});

closeButtonNewPlace.addEventListener("click", function () {
  tooglePopup(popupAddElement);
});

formProfile.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  formProfile.reset();
  tooglePopup(popupAddElement);
});
*/
