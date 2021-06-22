import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._photo = this._popupElement.querySelector('.popup__image');
        this._name = this._popupElement.querySelector('.popup__caption');
    }

    open({ link, name }) {
        this._name.textContent = name;
        this._photo.alt = name;
        this._photo.src = link;

        super.open();
    }
}