import './pages/index.css';

import {
    addButton,
    editButton,
    popupProfileNameInput,
    popupProfileJobInput,
    selectors,
    initialCards,
    config,
} from './utils/constants.js';

import Section from './components/Section.js';
import Card from './components/Card.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from './components/PopupWithImage.js';
import UserInfo from './components/UserInfo.js';
import FormValidator from './components/FormValidator.js';

////////добавление фото-карточки////////
function createCard(item) {
    const card = new Card(item, '#photo-template', () => {
        popupWithImage.open(item);
    });
    return card.generateCard();
}

////////создание начального массива карточек////////
const cardsSection = new Section({
    items: initialCards,
    renderer: (item) => {
        cardsSection.appendItem(createCard(item));
    }
}, selectors.photosSection);

cardsSection.renderAll();

////////фото-превью////////
const popupWithImage = new PopupWithImage({
    popupSelector: selectors.popupPreview
});

popupWithImage.setEventListeners();

////////отображение данных о пользователе////////
const userInfo = new UserInfo({
    nameSelector: selectors.userName, 
    infoSelector: selectors.userInfo
});

////////попап доб.фото////////
const photoPopup = new PopupWithForm({
    popupSelector: selectors.popupPhoto
}, item => cardsSection.prependItem(createCard(item)));

const photoPopupValidation = new FormValidator(config, '.popup__form_photo');
photoPopupValidation.enableValidation();

////////попап ред.профиля////////
const profilePopup = new PopupWithForm({
    popupSelector: selectors.popupProfile
}, inputs => userInfo.setUserInfo(inputs));

const profilePopupValidation = new FormValidator(config, '.popup__form_profile');
profilePopupValidation.enableValidation();

////////добавить фото////////
addButton.addEventListener('click', () => {
    photoPopupValidation.clearErrorElements();
    photoPopupValidation.toggleButtonState();

    photoPopup.open();
});

////////ред. профиля////////
editButton.addEventListener('click', () => {
    const { name: name, about: about } = userInfo.getUserInfo();

    name.textContent = popupProfileNameInput.value;
    about.textContent = popupProfileJobInput.value;

    profilePopup.open();
});

/////////FORM VALIDATION/////////
// const formEditProfile = new FormValidator(config, formProfile);
// formEditProfile.enableValidation(); //валидация ред. профиля

// const formEditPhoto = new FormValidator(config, formPhoto);
// formEditPhoto.enableValidation(); //валидация доб.фото

// popupPhotoOpenButton.addEventListener('click', () => {
//     popupPhoto.open();
// });

// popupProfileOpenButton.addEventListener('click', () => {
//     const newUserInfo = userInfo.getUserInfo();
//     popupProfileName.value = newUserInfo.textContent;
//     popupProfileJob.value = newUserInfo.textContent;
//     popupProfile.open();
// });




/////////////FUNCTIONS//////////////
// function openPopup(openedPopup) {
//     openedPopup.classList.add('popup_opened');

//     document.addEventListener('keydown', closeWithEsc);
// }
// // открытие попапа

// function closePopup(closedPopup) {
//     closedPopup.classList.remove('popup_opened');

//     document.removeEventListener('keydown', closeWithEsc);
// }
//закрытие попапа

// const clearInputs = () => {
//     const formElement = document.querySelectorAll('.popup__form');
//     const formElementArr = Array.from(formElement);
//     formElementArr.forEach((item => {
//         item.reset();
//     }));
// }
//очищение полей ввода

// function closeWithEsc (evt) {
//     if (evt.key === "Escape") {
//         const popup = document.querySelector('.popup_opened');
//         closePopup(popup);
//     }
// }
// закрытие Esc

// const closeWithClick = (evt) => {
//     const popup = document.querySelector('.popup_opened');
//     if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__button-close')) {
//       closePopup(popup)
//    }
//   }
// закрытие мышью


////////LISTENERS///////////

////////////////PROFILE POPUP/////////////////
// popupProfileOpenButton.addEventListener('click', () => {
//     popupProfileNameInput.value = popupProfileName.textContent;
//     popupProfileJobInput.value = popupProfileJob.textContent;

//     formEditProfile.clearErrorElements();
//     formEditProfile.toggleButtonState();

//     popupProfile.openPopup();
// }); 
// // открыть редактирование

// popupProfileCloseButton.addEventListener('click', () => {
//     // closePopup(popupProfile);
// }); 
// // закрыть ред.

// popupProfile.addEventListener('submit', (evt) => {
//     evt.preventDefault()

//     popupProfileName.textContent = popupProfileNameInput.value;
//     popupProfileJob.textContent = popupProfileJobInput.value;
    
//     // closePopup(popupProfile);
// }); 
// // сохранить имя в профиль


// ////////////////PHOTO POPUP/////////////////
// popupPhotoOpenButton.addEventListener('click', () => {
//     formEditPhoto.clearErrorElements();
//     formEditPhoto.toggleButtonState();

//     clearInputs();

//     // openPopup(popupPhoto);
// }); 
// // открыть доб. фото

// popupPhotoCloseButton.addEventListener('click', () => {
//     // closePopup(popupPhoto);
// }); 
// // закрыть доб. фото

// // function createCard(link, name, template, openedPopup) {
// //     const card = new Card(link, name, template, openedPopup);
// //     return card.generateCard();
// // }
// //создание карточки

// function handleAddPhotoCard(evt) {
//     evt.preventDefault();
//     const card = new Card({
//         link: popupPhotoPhotoInput.value,
//         name: popupPhotoTitleInput.value
//     }, '.photo');
//     cardsSection.addItem(card.generateCard());
//     //photosContainer.prepend(createCard(popupPhotoPhotoInput.value, popupPhotoTitleInput.value, '#photo-template', openPopup));
    
//     popupPhotoForm.reset();

//     // closePopup(popupPhoto);
// }
// //добавление фото


// ////////////CREATE PHOTO-CARD////////////
// // initialCards.forEach((photo) => { 
// //     //photosContainer.append(createCard(photo.link, photo.name, '#photo-template', openPopup));
// // });
// // перебор массива карточек


// /////////////BUTTONS////////////
// popupFullPhotoCloseButton.addEventListener('click', () => {
//     //closePopup(popupFullPhoto);
// }); 
// // закрыть просмотр фото

// //popupPhotoForm.addEventListener('submit', handleAddPhotoCard);

// // popupProfile.addEventListener('mousedown', closeWithClick);
// // popupPhoto.addEventListener('mousedown', closeWithClick);
// // popupFullPhoto.addEventListener('mousedown', closeWithClick);

