//import { togglePopup } from "../utils/utils.js";

export default class Popup {
  constructor(popupSelector) {
    this.popupSelector = popupSelector;
    this.popupCloseSelector = ".popup__button-close";
   // this.togglePopup = togglePopup; 

  }

  open (){
    const popupShow = document.querySelector(this.popupSelector)
    popupShow.classList.add("popup_show")
    document.addEventListener("keydown", this._handleEscClose)

  }
  close (){
    const popupShow = document.querySelector(this.popupSelector)
    popupShow.classList.remove("popup_show")
    document.removeEventListener("keydown", this._handleEscClose)
  }

  _handleEscClose = (evt) => {
    const popupShow = document.querySelector(this.popupSelector)    
    if(evt.key === 'Escape'){
        popupShow.classList.remove("popup_show");
    }    
  }

  setEventListeners(){
    const popupShow = document.querySelector(this.popupSelector)
    if(!this.popupCloseButton){
      const closeButton = popupShow.querySelector(this.popupCloseSelector);
      closeButton.addEventListener('click', () => {
        this.close();
      })
    }
    popupShow.querySelector('.popup__overlay').addEventListener('click', () => {
      this.close();
    })
  }
}