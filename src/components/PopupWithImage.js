import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor({ popupSelector }) {
        super({ popupSelector });

        this._photo = this._popupElement.querySelector('.popup__image');
        this._title = this._popupElement.querySelector('.popup__caption');
    }
    
    open(name, link) {
        super.open();

        this._title.textContent = name;
        this._photo.alt = name;
        this._photo.src = link;
    }
}