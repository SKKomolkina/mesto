export default class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;

        this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
    }
    //принять конфиг

    _setEventListeners() {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this.toggleButtonState();
            });
        });
    }
    //set listner on button & inputs

    _hideInputError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

        inputElement.classList.remove(this._config.inputErrorClass);
        errorElement.classList.remove(this._config.errorClass);
        errorElement.textContent = '';
    }
    //спрятать ошибку инпутов

    _showInputError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

        inputElement.classList.add(this._config.inputErrorClass);
        errorElement.classList.add(this._config.errorClass);
        errorElement.textContent = inputElement.validationMessage;
    }
    //показать ошибку инпутов

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

    _setAbleButton = () => {
        this._buttonElement.disabled = false;
        this._buttonElement.classList.remove(this._config.inactiveButtonClass);
    }
    //активная кнопка

    _setDisableButton = () => {
        this._buttonElement.disabled = true;
        this._buttonElement.classList.add(this._config.inactiveButtonClass);
    }
    //неактивная кнопка

    toggleButtonState() {
        if (this._hasInputValidity()) {
            this._setDisableButton(this._buttonElement);
        } else {
            this._setAbleButton(this._buttonElement);
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