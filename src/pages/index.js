//CSS
import './index.css';

//константы
import {
    addButton,
    editButton,
    popupProfileNameInput,
    popupProfileJobInput,
    selectors,
    config,
    // popupDeletePhoto,
    // formDelete,
    // photoTemplate,
    avatarContainer,
    // popupAvatar,
} from '../utils/constants.js';

//классы
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';
import PopupWithSubmit from '../components/PopupWithSubmit';


//----------------------------


let userId;


//----------------------------


//конфиг АПИ 
const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-25',
    headers: {
        authorization: 'e0ccb70a-8300-4fff-b1a9-1044a866d1c7',
        'Content-Type': 'application/json'
    }
});

//получение данных с АПИ
api.getData()
    .then((arg) => {
        const [dataUser, dataCards] = arg;
        userInfo.setUserInfo(dataUser);
        userInfo.setAvatar(dataUser.avatar);
        userId = dataUser._id
        cardsSection.renderAll(dataCards);
    })
    .catch(data => { showError(data) });


//----------------------------

//сброс стандартной отправки формы
const formList = Array.from(document.querySelectorAll(config.formSelector));
formList.forEach(formElement => {
    formElement.addEventListener('sumbit', evt => {
        evt.preventDefault();
    });
});

//сабмит формы редактирования профиля
const formEditSubmit = (inputsValue) => {
    profilePopup.onLoadingButton('Сохранение...');

    api.editProfile(inputsValue.name, inputsValue.about)
        .then(() => {
            userInfo.setUserInfo(inputsValue);
            profilePopup.close();
        })
        .catch(err => showError(err))
        .finally(() => {
            profilePopup.offLoadingButton();
        });
}

//сабмит формы добавления фото
const formAddPhotoSubmit = (inputsValue) => {
    photoPopup.onLoadingButton('Сохранение...');

    api.addCard(inputsValue.name, inputsValue.link)
        .then((data) => {
            cardsSection.prependItem(createCard(data, userId, '#photo-template'));
            photoPopup.close();
        })
        .catch(err => showError(err))
        .finally(() => {
            photoPopup.offLoadingButton();
        })
}

//функция удаления карточки
const formDeleteCard = (evt, card) => {
    evt.preventDefault();

    api.deleteCard(card.getCardId())
        .then(res => {
            card.removeCard();
            popupWithDelete.close();
        })
        .catch(err => showError(err))
}

const formChangeAvatar = (inputsValue) => {
    popupEditAvatar.onLoadingButton('Сохранение...');

    api.changeAvatar(inputsValue['link'])
        .then(() => {
            userInfo.setAvatar(inputsValue['link']);
            popupEditAvatar.close();
        })
        .catch(err => showError(err))
        .finally(() => {
            popupEditAvatar.offLoadingButton();
        })
}

//создание начального массива карточек
const cardsSection = new Section({
    renderer: (cardData) => {
        cardsSection.appendItem(createCard(cardData, userId, '#photo-template'));
    }
}, selectors.photosSection);


//----------------------------


//фото-превью
const popupWithImage = new PopupWithImage({
    popupSelector: selectors.popupPreview
});

//отображение данных о пользователе
const userInfo = new UserInfo({
    nameSelector: selectors.userName,
    infoSelector: selectors.userInfo,
    avatarSelector: selectors.userAvatar,
});

//попап добавления фото
const photoPopup = new PopupWithForm({
    popupSelector: selectors.popupPhoto
}, formAddPhotoSubmit);

//попап редактирования профиля
const profilePopup = new PopupWithForm({
    popupSelector: selectors.popupProfile
}, formEditSubmit);

const popupEditAvatar = new PopupWithForm({
    popupSelector: selectors.popupAvatar
}, formChangeAvatar);

//попап удаления карточки
const popupWithDelete = new PopupWithSubmit({
    popupSelector: selectors.popupDelete
}, (evt, card) => {
    formDeleteCard(evt, card)
});


//----------------------------


//показать ошибки
function showError(err) {
    console.log(err);
}

//функция открытия редактирования профиля
function openProfile() {
    popupProfileNameInput.value = userInfo.getUserInfo().name;
    popupProfileJobInput.value = userInfo.getUserInfo().about;

    profilePopup.open();
    profilePopupValidation.clearErrorElements();
    profilePopup.offLoadingButton();
}

//функция создания карточки
function createCard(item, userId, templateSelector) {
    const card = new Card(item, userId, templateSelector, {
        handleCardClick: (name, link) => {
            popupWithImage.open(name, link);
        },
        handleCardLike: () => {
            const likesCounter = card.likesCounter();
            const result = likesCounter ? api.deleteLike(card.getCardId()) : api.setLike(card.getCardId());

            result
                .then(data => {
                    card.setLike(data.likes);
                    card.renderLikes();
                })
                .catch(err => showError(err));
        },
        handleCardDelete: () => {
            popupWithDelete.open(card);
        }
    }, item._id);
    const newCard = card.generateCard();
    return newCard;
}


//----------------------------


//кнопка редактирования профиля
editButton.addEventListener('click', openProfile);

//кнопка добавления фото
addButton.addEventListener('click', () => {
    photoPopupValidation.clearErrorElements();
    photoPopup.open();
    photoPopup.offLoadingButton();
});

//попап изменения аватарки
avatarContainer.addEventListener('click', function() {
    popupEditAvatar.open();
    changeAvatarValidation.clearErrorElements();
    popupEditAvatar.offLoadingButton();
});

//----------------------------


//создание валидации
const photoPopupValidation = new FormValidator(config, '.popup__form_photo');
const profilePopupValidation = new FormValidator(config, '.popup__form_profile');
const changeAvatarValidation = new FormValidator(config, '.popup__form_avatar');

//----------------------------


//подключение валидации к попапам
photoPopupValidation.enableValidation();
profilePopupValidation.enableValidation();
changeAvatarValidation.enableValidation();

//----------------------------


//слушатели
popupWithImage.setEventListeners();
photoPopup.setEventListeners();
profilePopup.setEventListeners();
popupWithDelete.setEventListeners();
popupEditAvatar.setEventListeners();