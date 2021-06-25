export default class Popup {
    constructor({ popupSelector }) {
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
        };
    }

    _handleCloseClick(evt) {
        if (evt.target === evt.currentTarget) {
            this.close();
        };
    }

    setEventListeners() {
        this._closeButton = this._popupElement.querySelector('.button-close');
        this._closeButton.addEventListener('click', () => this.close());

        this._popupElement.addEventListener('click', this._handleCloseClick.bind(this));
    }
}