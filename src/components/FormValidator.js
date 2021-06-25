class FormValidator {
    constructor(config, formElement) {
        this._formElement = document.querySelector(formElement);

        this._inputSelector = config.inputSelector;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;

        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;

        this._submitButton = this._formElement.querySelector(config.submitButtonSelector)
    }
    //принять конфиг

    _setEventListeners() {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this.toggleButtonState();
            });
        });

        this.toggleButtonState(this._submitButton);
    }
    //set listner on button & inputs

    _showInputError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

        inputElement.classList.add(this._inputErrorClass);
        errorElement.classList.add(this._errorClass);
        errorElement.textContent = inputElement.validationMessage;
    }
    //показать ошибку инпутов

    _hideInputError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    }
    //спрятать ошибку инпутов

    _checkInputValidity = (inputElement) => {
        if (inputElement.validity.valid) {
            this._hideInputError(inputElement);
        } else {
            this._showInputError(inputElement);
        }
    }
    //провекрка валидности инпута

    _hasInputValidity = () => {
        return this._inputList.some((inputElement => !inputElement.validity.valid));
    }
    // проверка вал.формы

    setAbleButton = () => {
        this._submitButton.disabled = false;
        this._submitButton.classList.remove(this._inactiveButtonClass);
    }
    //активная кнопка

    setDisableButton = () => {
        this._submitButton.disabled = true;
        this._submitButton.classList.add(this._inactiveButtonClass);
    }
    //неактивная кнопка

    toggleButtonState() {
        if (this._hasInputValidity()) {
            this.setDisableButton(this._submitButton);
        } else {
            this.setAbleButton(this._submitButton);
        }
    }
    //переключение кнопки

    clearErrorElements = () => {
        this._inputList.forEach(inputElement => {
            this._hideInputError(inputElement);
        });
    }
    //очистка 

    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    }
}

export default FormValidator;