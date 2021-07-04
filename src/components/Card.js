export default class Card {
    constructor({ name, link, likes, owner }, userId, templateSelector, { handleCardClick, handleCardLike, handleCardDelete }, cardId) {
        this._link = link;
        this._name = name;
        this._likeCount = likes;
        this._ownerId = owner._id;
        
        this._templateSelector = templateSelector;
        
        this._handleCardClick = handleCardClick;
        this._handleCardLike = handleCardLike;
        this._handleCardDelete = handleCardDelete;

        this._userId = userId;
        this._cardId = cardId;
    }
    
    //создание ДОМ экземпляра
    generateCard() {
        this._cardElement = this._getTemplate();

        this._likeButton = this._cardElement.querySelector('.photo__like');
        this._likes = this._cardElement.querySelector('.photo__like-counter');
        this._removeButton = this._cardElement.querySelector('.photo__trash');

        this._cardPhoto = this._cardElement.querySelector('.photo__image');
        this._cardTitle = this._cardElement.querySelector('.photo__title');

        if (this._ownerId !== this._userId) {
            this._removeButton.remove();
        }

        this._cardPhoto.src = this._link;
        this._cardPhoto.alt = this._name;
        this._cardTitle.textContent = this._name;

        this._setEventListeners();
        this.renderLikes();

        return this._cardElement;
    }

    _getTemplate() {
        const card = document.querySelector(this._templateSelector).content.querySelector('.photo').cloneNode(true);
        
        return card;
    }

    getCardId() {
        return this._cardId;
    }

    //находим лайкнувшего в массиве
    likesCounter() {
        return this._likeCount.some(like => {
            return like._id === this._userId;
        });
    }

    //изменить состояние кнопки
    showLike() {
        if (this.likesCounter(this._userId)) {
            this._likeButton.classList.add('photo__like_active');
        } else {
            this._likeButton.classList.remove('photo__like_active');
        }
    }

    //отрисовка лайка
    renderLikes() {
        this._likes.textContent = this._likeCount.length;
        this.showLike(this._userId);
    }

    //поставить лайк
    setLike(list) {
        this._likeCount = list;
    }

    //удаление карточки
    removeCard() {
        this._cardElement.remove();
        this._cardElement = null;
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => this._handleCardLike());
        this._removeButton.addEventListener('click', () => this._handleCardDelete());
        this._cardPhoto.addEventListener('click', () => this._handleCardClick(this._name, this._link));
    }
}
