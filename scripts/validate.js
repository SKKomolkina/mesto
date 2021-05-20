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

const checkInputValidity = (formElement, inputElement) => {
    if (inputElement.validity.valid) {
        hideInputError(formElement, inputElement, config)
    } else {
        showInputError(formElement, inputElement, config)
    }
}


const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement => !inputElement.validity.valid));
}

const toggleButtonState = (buttonElement, inputList) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
    } else {
        buttonElement.disabled = false;
    }
}
//переключение кнопки submit

const setEventListeners = (formElement, config) => {
    const { inputSelector, submitButtonSelector, ...restConfig } = config;
    // formElement.addEventListener('submit', (evt) => {
    //     evt.preventDefault();
    // });
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    toggleButtonState(buttonElement, inputList);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {

            checkInputValidity(formElement, inputElement, restConfig);
            toggleButtonState(buttonElement, inputList, restConfig);
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