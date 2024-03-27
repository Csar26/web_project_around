import { togglePopup } from "../utils/utils.js";

export default class Popup {
  constructor(popupSelector) {
    this.popupSelector = popupSelector;
    this.popupCloseSelector = "popup__button-close";
    this.togglePopup = togglePopup; 
    
  }

  open (){
    const popupShow = document.querySelector(this.popupSelector)
    popupShow.classList.add("popup_show")


  }
  close (){
    const popupShow = document.querySelector(this.popupSelector)
    popupShow.classList.remove("popup_show")

  }

  _handleEscClose(){
    this.popupSelector.addEventListener("click") => {
      this
      
    }

  }
  
  setEventListeners(){

    if(!this.popupCloseButton){
      this.popupCloseButton = this.popupShow.querySelector(this.popupCloseSelector)
    }

  }
}