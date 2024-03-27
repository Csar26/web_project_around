import Popup from "./Popup.js";
import { popupImage } from "../utils/utils";

export class PopupWithImage extends Popup {
  constructor (popupImage, popupSelector) {
    super (popupSelector);
    this.popupImage = popupImage;
  
  }

  open () {
    popupImage = document.querySelector(this.)
    popupShow.classList.add("popup_show")


  }
  

}