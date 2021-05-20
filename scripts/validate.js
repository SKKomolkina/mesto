const hideInputError = (formElement, inputElement, config) => {
    const { inputErrorClass, errorClass } = config;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
}
//спрятать ошибку

const showInputError = (formElement, inputElement, config) => {
    const { inputErrorClass, errorClass } = config;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.add(inputErrorClass);
    errorElement.classList.add(errorClass);
    errorElement.textContent = inputElement.validationMessage;
}
//показать ошибку

const checkInputValidity = (formElement, inputElement, config) => {
    if (inputElement.validity.valid) {
        hideInputError(formElement, inputElement, config);
    } else {
        showInputError(formElement, inputElement, config);
    }
}

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement => !inputElement.validity.valid));
}

const toggleButtonState = (inputList, buttonElement, buttonClass) => {
    if (checkInputValidity(inputList)) {
          setDisableButton(buttonElement, buttonClass);
    } else {
          setAbleButton(buttonElement, buttonClass);
    }
}

const setDisableButton = (button, classButton) => {
    button.disabled = true;
    button.classList.add(classButton);
}

const setAbleButton = (button, classButton) => {
    button.disabled = false;
    button.classList.remove(classButton);
}

const setEventListeners = (formElement, config) => {
    const { inputSelector, submitButtonSelector, inactiveButtonClass, ...restConfig } = config;
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    toggleButtonState(inputList, buttonElement, inactiveButtonClass);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {

            checkInputValidity(formElement, inputElement, restConfig);
            toggleButtonState(inputList, buttonElement, inactiveButtonClass);
        });
    });
}
//set listener on button & inputs


function clearErrorElements(formList) {
    const {inputSelector} = config;
    formList.forEach(formElement => {
      const inputList = Array.from(formElement.querySelectorAll(inputSelector));
      inputList.forEach(inputElement => {
        hideInputError(formElement, inputElement, config);
        // toggleButtonState()
      })
    })
}
//clear error inputs

const enableValidation = (config) => {
    const { formSelector, ...restConfig } = config;
    const formList = Array.from(document.querySelectorAll(formSelector));

    formList.forEach((formElement) => {
        setEventListeners(formElement, restConfig);
        });
}
//inputs validation