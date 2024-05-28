import Popup from "./Popup.js";
export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
  }

  _getInputValues() {
    const popupShow = document.querySelector(this.popupSelector)
    const form = popupShow.querySelector('form');
    const inputElements = Array.from(form.querySelectorAll('input'));
    const inputValues = {};
    inputElements.forEach(inputElement => {
        inputValues[inputElement.name] = inputElement.value;
    })
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    const popupShow = document.querySelector(this.popupSelector)
    const form = popupShow.querySelector('form');
    const buttonWithForm = form.querySelector(".form_submit") 
    form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        buttonWithForm.textContent = "Saving...";
        this._handleSubmit(this._getInputValues(), buttonWithForm).then(()=>{
          buttonWithForm.textContent = "Save";
        });
        //this.close();
    }) 
  }

  close(){
    super.close();
    const popupShow = document.querySelector(this.popupSelector)
    const form = popupShow.querySelector('form');
    form.reset();
  }

}