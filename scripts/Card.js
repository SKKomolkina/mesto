export default class Card {
    constructor(link, name, templateSelector) {
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
        // this.photoOpen = photoOpen;

        this._getTemplate();
        this._setEventListeners();
    }

    _getTemplate() {
        const cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.photo');
        this._cardElement = cardTemplate.cloneNode(true);

        this._likeButton = this._cardElement.querySelector('.photo__like');
        this._removeButton = this._cardElement.querySelector('.photo__trash');
        this._cardPhoto = this._cardElement.querySelector('.photo__image');
        this._cardTitle = this._cardElement.querySelector('.photo__title');

        this._cardPhoto.src = this._link;
        this._cardPhoto.alt = this._name;
        this._cardTitle.textContent = this._name;
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => this._handleSetLike());
        this._removeButton.addEventListener('click', () => this._handleRemoveCard());
        // this._cardPhoto.addEventListener('click', this._handlePhotoOpen());
    }

    _handleSetLike() {
        this._likeButton.classList.toggle('photo__like_active');
    }

    _handleRemoveCard() {
        this._cardElement.remove();
    }

    // _handlePhotoOpen() {
    //     this._
    // }
    generateCard() {
        this._cardPhoto.src = this._link;
        this._cardPhoto.alt = this._name;
        // this._cardElement.querySelector('.popup__caption') = this._name;
        // this._.querySelector('.popup__image') = 

        return this._cardElement;
    }
}