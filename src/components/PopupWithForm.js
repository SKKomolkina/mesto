import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({ popupSelector }, submitForm) {
        super({ popupSelector });
        this._submitForm = submitForm;
        
        this._inputList = Array.from(this.formElement.querySelectorAll('.popup__input'));
    }
    
    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        return this._formValues;
    }
    //сбор всех данных из всех полей форм
    
    _handleSubmit (evt) {
        evt.preventDefault();
        this._submitForm(this._getInputValues());
        this.close()
    }

    setEventListeners() {
        super.setEventListeners();
        this.formElement = this._popupElement.querySelector('.popup__form');
        this.formElement.addEventListener('submit', (evt) => this._handleSubmit(evt));
    }
    
    close() {
        super.close();
        this.formElement.reset();
    }
}