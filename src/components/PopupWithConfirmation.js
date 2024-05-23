import Popup from "./Popup";


export default class PopupWithConfirmation extends Popup{
  constructor(popupSelector){
      super(popupSelector);
  }

  open(handleConfirm){
      super.open();
      this._handleConfirm = handleConfirm;
  }

  setEventListeners() {
      super.setEventListeners();
      const popupShow = document.querySelector(this.popupSelector);
      popupShow.querySelector('.form_submit').addEventListener('click', () => {
          this._handleConfirm().then(() => {
              this.close();
          });
      })
  }
}