const handleInput = (event, configForm) => {
  const form = event.target.closest(configForm.formSelector);
  const submitButton = form.querySelector(configForm.submitButtonSelector)
  const target = event.target;
  const errorNode = form.querySelector(`.${configForm.errorClass}${target.name}`);
  if (target.validity.valid){
    target.classList.remove(configForm.inputErrorClass);
    errorNode.textContent = " ";
  }else{
    target.classList.add(configForm.inputErrorClass);
    errorNode.textContent = target.validationMessage;
  }
  submitButton.disabled = !isvalid(form, configForm);

}

function isvalid(form, configForm) {
  const inputList = Array.from(form.querySelectorAll(configForm.inputSelector));
  console.log(inputList, form, configForm.inputSelector);
  return inputList.every((item)=>{
    return item.validity.valid;
  })
}



const enableValidation = (configForm) => {
  const formList = Array.from(document.querySelectorAll(configForm.formSelector));
  formList.forEach((formElement) => {
    const submitButton = formElement.querySelector(configForm.submitButtonSelector)
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });  

    formElement.addEventListener('input', event => {
      handleInput(event, configForm);
    });  
    submitButton.disabled = !isvalid(formElement, configForm);
  });
}



enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".form_input",
  submitButtonSelector: ".form_submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "form_input_has-error",
  errorClass: "form_error_index_"
}); 



//const form = document.querySelector(".popup__form");

/*
form.addEventListener("input", (event) => {
  const target = event.target;
  const errorNode = form.querySelector(`.form_error_index_${target.name}`);
  console.log(errorNode, `.form__error_index_${target.name}`);
  if (target.validity.valid){
    target.classList.remove(".form_input_has-error");
    errorNode.textContent = " ";
  }else{
    target.classList.add(".form_input_has-error");
    errorNode.textContent = target.validationMessage;
  }
submitButton.disabled = !isvalid(form);
})
*/