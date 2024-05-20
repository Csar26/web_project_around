//import { popupImage, togglePopup } from "../utils/utils.js";
export default class Card {
  constructor(
    title,
    link,
    selector,
    handleCardClick,
    handleLike,
    handleRemoveLike,
    handleDeleteCard,
    { _id, likes, owner, createdAt }, 
    user
  ) {
    this._title = title;
    this._link = link;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._handleLike = handleLike;
    this._handleRemoveLike = handleRemoveLike;
    this._handleDeleteCard = handleDeleteCard;
    this._id = _id;
    this._likes = likes;
    this._owner = owner;
    this._createdAt = createdAt;
    this._user = user;
    
  }

  _getTemplate() {
    this._node = document
      .querySelector(this._selector)
      .content.querySelector(".element")
      .cloneNode(true);
    this._node.querySelector(".element__title").textContent = this._title;
    this._node.querySelector(".element__image").src = this._link;
    if(!!this._likes && this.hasOwnerLike()){
      this._node
              .querySelector(".element__like")
              .classList.add("element__like-click");
    }

    if(!!this._owner && !!this._user && !this.userIsOwner()){
      this._node.querySelector(".button-delete").style.display = 'none';
    }

    return this._node;
  }

  hasOwnerLike() {
    return this._likes.some((item) => {
      return item._id === this._user._id;
    });
  }

  userIsOwner() {
    return this._owner._id === this._user._id;
  }

  _setEventListeners() {
    this._node.querySelector(".element__like").addEventListener(
      "click",
      () => {
        console.log(this.hasOwnerLike(), this._owner._id, this._likes);
        if (this.hasOwnerLike()) {
          this._handleRemoveLike(this._id).then((card) => {
            this._node
              .querySelector(".element__like")
              .classList.remove("element__like-click");
            this._likes = card.likes;
          });
        } else {
          this._handleLike(this._id).then((card) => {
            this._node
              .querySelector(".element__like")
              .classList.add("element__like-click");
            this._likes = card.likes;
          });
        }
        //colocar el textcontet de contador de likes : textContent = this._likes.lenghtM
      }
      //this._node .querySelector(".element__like")
      // .classList.toggle("element__like-click");
    );

    this._node.querySelector(".button-delete").addEventListener("click", () => {
      this._handleDeleteCard(this._id);
      //this._node.remove();
    });
    this._node
      .querySelector(".element__image")
      .addEventListener("click", () => {
        this._handleCardClick(this._title, this._link);
        /*
        popupImage.querySelector(".popup__image").src = this._link;
        popupImage.querySelector(".popup__title").textContent = this._title;
        popupImage.querySelector(".popup__image").alt = this._title;
        togglePopup(popupImage);
        */
      });
  }

  render() {
    this._getTemplate();
    this._setEventListeners();
    return this._node;
  }
}
