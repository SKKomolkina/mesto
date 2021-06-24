export default class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._link = data.link;
        this._name = data.name;

        this._templateSelector = document.querySelector(templateSelector).content;
        
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const card = this._templateSelector.querySelector('.photo').cloneNode(true);
        return card;
    }

    _getElements() {
        this._cardElement = this._getTemplate();

        this._cardPhoto = this._cardElement.querySelector('.photo__image');
        this._cardTitle = this._cardElement.querySelector('.photo__title');
        this._likeButton = this._cardElement.querySelector('.photo__like');
        this._removeButton = this._cardElement.querySelector('.photo__trash');
    }

    _handleSetLike() {
        this._likeButton.classList.toggle('photo__like_active');
    }

    _handleRemoveCard() {
        this._cardElement.remove();
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => this._handleSetLike());
        this._removeButton.addEventListener('click', () => this._handleRemoveCard());
        this._cardPhoto.addEventListener('click', () => this._handleCardClick());
    }

    generateCard() {
        this._getElements();
        this._setEventListeners();

        this._cardPhoto.src = this._link;
        this._cardPhoto.alt = this._name;
        this._cardTitle.textContent = this._name;

        return this._cardElement;
    }
}