import Popup from "./Popup.js";
//import { popupImage } from "../utils/utils"

export class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super (popupSelector);
  }

  open (title, link) {
    super.open();
    const popupShow = document.querySelector(this.popupSelector);
    const imageNode = popupShow.querySelector('.popup__image');
    const titleNode = popupShow.querySelector('.popup__title');
    imageNode.src = link;
    imageNode.alt = title;
    titleNode.textContent = title;
  }

}