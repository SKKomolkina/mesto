import Popup from './Popup.js';

export default class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._data = data;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;

        const cardTemplate = document.querySelector(this._templateSelector).content;
        this._cardElement = cardTemplate.cloneNode(true);

        this._getTemplate();
        this._setEventListeners();
    }

    _getTemplate() {
        this._card = this._cardElement.querySelector('.photo');
        this._cardPhoto = this._cardElement.querySelector('.photo__image');
        this._cardTitle = this._cardElement.querySelector('.photo__title');
        this._likeButton = this._cardElement.querySelector('.photo__like');
        this._removeButton = this._cardElement.querySelector('.photo__trash');
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => this._handleSetLike());
        this._removeButton.addEventListener('click', () => this._handleRemoveCard());
    }

    _handleSetLike() {
        this._likeButton.classList.toggle('photo__like_active');
    }

    _handleRemoveCard() {
        this._card.remove();
    }
    
    generateCard() {
        this._cardPhoto.src = this._data.link;
        this._cardPhoto.alt = this._data.name;
        this._cardTitle.textContent = this._data.name;

        return this._cardElement;
    }
}