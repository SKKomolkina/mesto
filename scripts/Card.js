export default class Card {
    constructor(link, name, templateSelector, openPhoto) {
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
        this._openPhoto = openPhoto;

        this._getTemplate();
        this._setEventListeners();
    }

    _getTemplate() {
        const cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.photo');
        this._cardElement = cardTemplate.cloneNode(true);

        this._cardPhoto = this._cardElement.querySelector('.photo__image');
        this._cardTitle = this._cardElement.querySelector('.photo__title');
        this._likeButton = this._cardElement.querySelector('.photo__like');
        this._removeButton = this._cardElement.querySelector('.photo__trash');
        this._fullPhoto = document.querySelector('.popup__image');
        this._fullPhotoCaption = document.querySelector('.popup__caption');
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => this._handleSetLike());
        this._removeButton.addEventListener('click', () => this._handleRemoveCard());
        this._cardPhoto.addEventListener('click', () => this._handlePhotoOpen());
    }

    _handleSetLike() {
        this._likeButton.classList.toggle('photo__like_active');
    }

    _handleRemoveCard() {
        this._cardElement.remove();
    }

    _handlePhotoOpen() {
        this._fullPhoto.src = this._link;
        this._fullPhoto.alt = this._name;
        this._fullPhotoCaption.textContent = this._name;

        this._openPhoto(document.querySelector('.popup_full_photo'));
    }
    generateCard() {
        this._cardPhoto.src = this._link;
        this._cardPhoto.alt = this._name;
        this._cardTitle.textContent = this._name;

        return this._cardElement;
    }
}