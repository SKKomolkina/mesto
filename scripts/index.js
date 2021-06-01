import Card from './Card.js';
import FormValidator from './FormValidator.js';

/////////////PHOTO TEMPLATE/////////////
const initialCards = [
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

/////////////POPUP PROFILE/////////////
const popupProfile = document.querySelector('.popup-profile'); // POPUP редактирования

const popupProfileOpenButton = document.querySelector('.profile__btn-edit'); // кнопка открыть ред.
const popupProfileCloseButton = popupProfile.querySelector('.popup__cross_btn_close-profile'); // кнопка "крестик", закрыть ред.

//const popupProfileForm = popupProfile.querySelector('.popup__form_profile'); // форма popup
const popupProfileName = document.querySelector('.profile__name'); // отображение имени на гл.стр.
const popupProfileJob = document.querySelector('.profile__about'); // отображение деятельности на гл.стр.
const popupProfileNameInput = popupProfile.querySelector('#popup__input_type_name'); // ввод имени
const popupProfileJobInput = popupProfile.querySelector('#popup__input_type_about'); // ввод деятельности

const formProfile = popupProfile.querySelector('.popup__form_profile'); //форма ред. профиля


/////////////POPUP PHOTO/////////////
const popupPhoto = document.querySelector('.popup-photo'); // POPUP доб. фото

const popupPhotoOpenButton = document.querySelector('.profile__btn-add'); // кнопка открыть фото доб.
const popupPhotoCloseButton = popupPhoto.querySelector('.popup__cross_btn_close-photo'); // кнопка "крестик", закрыть фото доб.

const popupPhotoForm = popupPhoto.querySelector('.popup__form_photo'); // форма popup
const popupPhotoTitleInput = popupPhoto.querySelector('#popup__input_type_title'); // форма ввода заголовка
const popupPhotoPhotoInput = popupPhoto.querySelector('#popup__input_type_image'); // форма ссылки 

const formPhoto = document.querySelector('.popup__form_photo'); //форма доб. фото

// const submitButtonPhotoPopup = popupPhoto.querySelector('.popup__save-photo');

///////FULL PHOTO POPUP//////////
const photosContainer = document.querySelector('.photos'); // секция всех фото

const popupFullPhoto = document.querySelector('.popup_full_photo'); // POPUP Full
const popupFullPhotoCloseButton = popupFullPhoto.querySelector('.popup__close_btn_close'); // button Open

//const popupFullPhotoImage = popupFullPhoto.querySelector('.popup__image'); // IMG 
//const popupFullPhotoTitle = popupFullPhoto.querySelector('.popup__caption'); // text


/////////FORM VALIDATION/////////
const config =
    {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}
const formEditProfile = new FormValidator(config, formProfile);
formEditProfile.enableValidation(); //валидация ред. профиля

const formEditPhoto = new FormValidator(config, formPhoto);
formEditPhoto.enableValidation(); //валидация доб.фото


/////////////FUNCTIONS//////////////
function openPopup(openedPopup) {
    openedPopup.classList.add('popup_opened');

    document.addEventListener('keydown', closeWithEsc);
}
// открытие попапа

function closePopup(closedPopup) {
    closedPopup.classList.remove('popup_opened');

    document.removeEventListener('keydown', closeWithEsc);
}
//закрытие попапа

const clearInputs = () => {
    const formElement = document.querySelectorAll('.popup__form');
    const formElementArr = Array.from(formElement);
    formElementArr.forEach((item => {
        item.reset();
    }));
}
//очищение полей ввода

function closeWithEsc (evt) {
    if (evt.key === "Escape") {
        const popup = document.querySelector('.popup_opened');
        closePopup(popup);
    }
}
// закрытие Esc

const closeWithClick = (evt) => {
    const popup = document.querySelector('.popup_opened');
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__button-close')) {
      closePopup(popup)
   }
  }
// закрытие мышью


////////LISTENERS///////////

////////////////PROFILE POPUP/////////////////
popupProfileOpenButton.addEventListener('click', () => {
    popupProfileNameInput.value = popupProfileName.textContent;
    popupProfileJobInput.value = popupProfileJob.textContent;

    formEditProfile.clearErrorElements();
    formEditProfile.toggleButtonState();

    openPopup(popupProfile);
}); 
// открыть редактирование

popupProfileCloseButton.addEventListener('click', () => {
    closePopup(popupProfile);
}); 
// закрыть ред.

popupProfile.addEventListener('submit', (evt) => {
    evt.preventDefault()

    popupProfileName.textContent = popupProfileNameInput.value;
    popupProfileJob.textContent = popupProfileJobInput.value;
    
    closePopup(popupProfile);
}); 
// сохранить имя в профиль


////////////////PHOTO POPUP/////////////////
popupPhotoOpenButton.addEventListener('click', () => {
    formEditPhoto.clearErrorElements();
    formEditPhoto.toggleButtonState();

    clearInputs();

    openPopup(popupPhoto);
}); 
// открыть доб. фото

popupPhotoCloseButton.addEventListener('click', () => {
    closePopup(popupPhoto);
}); 
// закрыть доб. фото

function createCard(link, name, template, openedPopup) {
    const card = new Card(link, name, template, openPopup);
    return card.generateCard();
}
//создание карточки

function handleAddPhotoCard(evt) {
    evt.preventDefault();

    photosContainer.prepend(createCard(popupPhotoPhotoInput.value, popupPhotoTitleInput.value, '#photo-template', openPopup));
    
    popupPhotoForm.reset();

    closePopup(popupPhoto);
}
//добавление фото


////////////CREATE PHOTO-CARD////////////
initialCards.forEach((photo) => { 
    photosContainer.append(createCard(photo.link, photo.name, '#photo-template', openPopup));
});
// перебор массива карточек


/////////////BUTTONS////////////
popupFullPhotoCloseButton.addEventListener('click', () => {
    closePopup(popupFullPhoto);
}); 
// закрыть просмотр фото

popupPhotoForm.addEventListener('submit', handleAddPhotoCard);

popupProfile.addEventListener('mousedown', closeWithClick);
popupPhoto.addEventListener('mousedown', closeWithClick);
popupFullPhoto.addEventListener('mousedown', closeWithClick);


