const _handleInput = (event, configForm) => {
  const form = event.target.closest(configForm.formSelector);
  const submitButton = form.querySelector(configForm.submitButtonSelector);
  const target = event.target;
  const errorNode = form.querySelector(
    `.${configForm.errorClass}${target.name}`
  );
  if (target.validity.valid) {
    target.classList.remove(configForm.inputErrorClass);
    errorNode.textContent = " ";
  } else {
    target.classList.add(configForm.inputErrorClass);
    errorNode.textContent = target.validationMessage;
  }
  submitButton.disabled = !_isValid(form, configForm);
};
function _isValid(form, configForm) {
  const inputList = Array.from(form.querySelectorAll(configForm.inputSelector));
  return inputList.every((item) => {
    return item.validity.valid;
  });
}
