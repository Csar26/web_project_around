import { popupImage, tooglePopup } from "../utils/utils.js";
export default class Card {
  constructor(title, link, selector) {
    this._title = title;
    this._link = link;
    this._selector = selector;
  }

  _getTemplate() {
    this._node = document
      .querySelector(this._selector)
      .content.querySelector(".element")
      .cloneNode(true);
      this._node.querySelector(".element__title").textContent = this._title;
      this._node.querySelector(".element__image").src = this._link;
    return this._node;
  }

  _setEventListeners() {
    this._node.querySelector(".element__like").addEventListener(
      "click",
      () => {
        this._node.querySelector(".element__like").classList.toggle(
          "element__like-click"
        );
      }
    );

    this._node.querySelector(".button-delete").addEventListener("click", () => {
      this._node.remove();
    });

    this._node.querySelector(".element__image").addEventListener(
      "click",
      () => {      
        popupImage.querySelector(".popup__image").src = this._link;
        popupImage.querySelector(".popup__title").textContent = this._title;
        popupImage.querySelector(".popup__image").alt = this._title;
        tooglePopup(popupImage);
      }
    );
  }

  render() {
    this._getTemplate();
    this._setEventListeners();
    return this._node;
  }
}
