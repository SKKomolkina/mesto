const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};


const hideInputError = (formElement, inputElement, config) => {
    const { inputErrorClass, errorClass } = config;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
}


const showInputError = (formElement, inputElement, config) => {
    const { inputErrorClass, errorClass } = config;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.add(inputErrorClass);
    errorElement.classList.add(errorClass);
    errorElement.textContent = inputElement.validationMessage;
}


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

    if (hasInvalidInput(inputList) || (inputList.value === 0)) {
        buttonElement.disabled = true;
    } else {
        buttonElement.disabled = false;
    }
}


const setEventListeners = (formElement) => {
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


const enableValidation = ({ formSelector, ...restConfig }) => {
    const formList = Array.from(document.querySelectorAll(formSelector));

    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, restConfig);
        
    });

}

const clearErrorElements = (formElement) => {
    formElement.forEach(input => hideInputError(input));
}



enableValidation(config);