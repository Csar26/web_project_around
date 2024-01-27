
const form = document.querySelector(".popup__form");
const submitButton = form.querySelector(".form_submit")


form.addEventListener("input", (event) => {
  const target = event.target;
  const errorNode = form.querySelector(`.form__error_index_${target.name}`);
  if (target.validity.valid){
    target.classList.remove(".form_input_has-error");
    errorNode.textContent = " ";
  }else{
    target.classList.add(".form_input_has-error");
    errorNode.textContent = target.validationMessage;
  }
submitButton.disabled = !isvalid(form);

})

function isvalid(form) {
  const inputList = Array.form(form.querySelectorAll("form_input"));
  return inputList.every((item)=>{
    return item.validity.valid;

  })
}
submitButton.disabled = !isvalid(form);

/*

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
}); 


const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".form_input"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
  }
  */