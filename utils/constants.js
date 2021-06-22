/////////////POPUP PROFILE/////////////
export const popupProfile = document.querySelector('.popup-profile'); // POPUP редактирования

export const popupProfileOpenButton = document.querySelector('.profile__btn-edit'); // кнопка открыть ред.
export const popupProfileCloseButton = popupProfile.querySelector('.popup__cross_btn_close-profile'); // кнопка "крестик", закрыть ред.

export const popupProfileName = document.querySelector('.profile__name'); // отображение имени на гл.стр.
export const popupProfileJob = document.querySelector('.profile__about'); // отображение деятельности на гл.стр.
export const popupProfileNameInput = popupProfile.querySelector('#popup__input_type_name'); // ввод имени
export const popupProfileJobInput = popupProfile.querySelector('#popup__input_type_about'); // ввод деятельности

export const formProfile = popupProfile.querySelector('.popup__form_profile'); //форма ред. профиля

/////////////POPUP PHOTO/////////////
export const popupPhoto = document.querySelector('.popup-photo'); // POPUP доб. фото

export const popupPhotoOpenButton = document.querySelector('.profile__btn-add'); // кнопка открыть фото доб.
export const popupPhotoCloseButton = popupPhoto.querySelector('.popup__cross_btn_close-photo'); // кнопка "крестик", закрыть фото доб.

export const popupPhotoForm = popupPhoto.querySelector('.popup__form_photo'); // форма popup
export const popupPhotoTitleInput = popupPhoto.querySelector('#popup__input_type_title'); // форма ввода заголовка
export const popupPhotoPhotoInput = popupPhoto.querySelector('#popup__input_type_image'); // форма ссылки 

export const formPhoto = document.querySelector('.popup__form_photo'); //форма доб. фото

///////FULL PHOTO POPUP//////////

export const popupFullPhoto = document.querySelector('.popup_full_photo'); // POPUP Full
export const popupFullPhotoCloseButton = popupFullPhoto.querySelector('.popup__close_btn_close'); // button Open

/////////FORM VALIDATION/////////
export const config =
    {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
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
// массив фото