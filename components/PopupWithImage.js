import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    open(data) {
        super.open();

        this._photo = this._popupElement.querySelector('.popup__image');
        this._title = this._popupElement.querySelector('.popup__caption');

        this._title.textContent = data.name;
        this._photo.alt = data.name;
        this._photo.src = data.link;
    }
}