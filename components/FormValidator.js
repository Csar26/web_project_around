
export default class FormValidator {
  constructor(form, config ){
    this._formElement = form;
    this._configForm = config;
  }

  handleInput = (event, configForm) => {
    const form = event.target.closest(this._configForm.formSelector);
    const submitButton = form.querySelector(this._configForm.submitButtonSelector)
    const target = event.target;
    const errorNode = form.querySelector(`.${this._configForm.errorClass}${target.name}`);
    if (target.validity.valid){
      target.classList.remove(this._configForm.inputErrorClass);
      errorNode.textContent = " ";
    }else{
      target.classList.add(this._configForm.inputErrorClass);
      errorNode.textContent = target.validationMessage;
    }
    submitButton.disabled = !this.isvalid(form, configForm);
  
  }
  
  isvalid(form, configForm) {
    const inputList = Array.from(form.querySelectorAll(configForm.inputSelector));
    return inputList.every((item)=>{
      return item.validity.valid;
    })
  }
  
  enableValidation = () => {
    const submitButton = this._formElement.querySelector(this._configForm.submitButtonSelector)
    this._formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });  

    this._formElement.addEventListener("input", event => {
      this.handleInput(event, this._configForm);
    });  
    submitButton.disabled = !this.isvalid(this._formElement, this._configForm);    
  }
}