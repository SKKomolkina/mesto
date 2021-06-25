import './index.css';

import {
    addButton,
    editButton,
    popupProfileNameInput,
    popupProfileJobInput,
    selectors,
    initialCards,
    config,
} from '../utils/constants.js';

import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';

////////добавление фото-карточки////////
function createCard(item) {
    const card = new Card(item, '#photo-template', () => {
        popupWithImage.open(item);
    });
    return card.generateCard();
}

////////создание начального массива карточек////////
const cardsSection = new Section({
    renderer: (item) => {
        cardsSection.appendItem(createCard(item));
    }
}, selectors.photosSection);
cardsSection.renderAll(initialCards);

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
photoPopup.setEventListeners();

const photoPopupValidation = new FormValidator(config, '.popup__form_photo');
photoPopupValidation.enableValidation();

////////попап ред.профиля////////
const profilePopup = new PopupWithForm({
    popupSelector: selectors.popupProfile
}, inputs => userInfo.setUserInfo(inputs));
profilePopup.setEventListeners();

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
    popupProfileNameInput.value = userInfo.getUserInfo().name;
    popupProfileJobInput.value = userInfo.getUserInfo().about;

    profilePopupValidation.clearErrorElements();
    profilePopupValidation.toggleButtonState();

    profilePopup.open();
});