/////////CONSTANTS/////////
export const editButton = document.querySelector('.profile__btn-edit'); // кнопка открыть ред.

export const addButton = document.querySelector('.profile__btn-add'); // кнопка открыть фото доб.

export const popupProfileNameInput = document.querySelector('#popup__input_type_name'); // ввод имени
export const popupProfileJobInput = document.querySelector('#popup__input_type_about'); // ввод деятельности

export const formProfile = document.querySelector('.popup__form_profile'); //форма ред. профиля
export const formPhoto = document.querySelector('.popup__form_photo'); //форма доб. фото
export const formDelete = document.querySelector('.popup__form_delete');

export const photoTemplate = document.querySelector('#photo-template');

export const avatarContainer = document.querySelector('.profile__photo-wrapper');

/////////SELECTORS/////////
export const selectors = {
    popupProfile: '.popup-profile',
    popupPhoto: '.popup-photo',
    popupPreview: '.popup_full_photo',
    popupDelete: '.popup-delete',
    popupAvatar: '.popup-avatar',
    userName: '.profile__name',
    userInfo: '.profile__about',
    userAvatar: '.profile__photo',
    photosSection: '.photos',
}

/////////FORM VALIDATION/////////
export const config =
    {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
}

/////////////PHOTO TEMPLATE/////////////
export const initialCards = [
    {
        name: 'Санкт-Петербург',
        link: 'https://images.unsplash.com/photo-1575705514569-46e1ab2661e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
        name: 'Москва',
        link: 'https://images.unsplash.com/photo-1541447271487-09612b3f49f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
    },
    {
        name: 'Казань',
        link: 'https://images.unsplash.com/photo-1600421539016-cc3f0866d2b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
    },
    {
        name: 'Светлогорск',
        link: 'https://images.unsplash.com/photo-1615440621221-fed77feb6aed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
        name: 'Карелия',
        link: 'https://images.unsplash.com/photo-1559029881-7cfd01ac1f18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
        name: 'Байкал',
        link: 'https://images.unsplash.com/photo-1619527441512-97d55b860d78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
    },
];