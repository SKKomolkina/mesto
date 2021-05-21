//////////////config////////////////////
const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

enableValidation(config);

const formList = document.querySelectorAll('.popup__form');
/////////////POPUP PROFILE/////////////
const popupProfile = document.querySelector('.popup-profile'); // POPUP редактирования

const popupProfileOpenButton = document.querySelector('.profile__btn-edit'); // кнопка открыть ред.
const popupProfileCloseButton = popupProfile.querySelector('.popup__cross_btn_close-profile'); // кнопка "крестик", закрыть ред.

const popupProfileForm = popupProfile.querySelector('.popup__form_profile'); // форма popup
const popupProfileName = document.querySelector('.profile__name'); // отображение имени на гл.стр.
const popupProfileJob = document.querySelector('.profile__about'); // отображение деятельности на гл.стр.
const popupProfileNameInput = popupProfile.querySelector('#popup__input_type_name'); // ввод имени
const popupProfileJobInput = popupProfile.querySelector('#popup__input_type_about'); // ввод деятельности

// const submitButtonProfilePopup = popupProfile.document.querySelector('.popup__save-profile');

/////////////POPUP PHOTO/////////////
const popupPhoto = document.querySelector('.popup-photo'); // POPUP доб. фото

const popupPhotoOpenButton = document.querySelector('.profile__btn-add'); // кнопка открыть фото доб.
const popupPhotoCloseButton = popupPhoto.querySelector('.popup__cross_btn_close-photo'); // кнопка "крестик", закрыть фото доб.

const popupPhotoForm = popupPhoto.querySelector('.popup__form_photo'); // форма popup
const popupPhotoTitleInput = popupPhoto.querySelector('#popup__input_type_title'); // форма ввода заголовка
const popupPhotoPhotoInput = popupPhoto.querySelector('#popup__input_type_image'); // форма ссылки 

// const submitButtonPhotoPopup = popupPhoto.querySelector('.popup__save-photo');


// const clearErrorElements = (formList, inputs) => {
//     Array.from(formList);
//     formList.forEach(inputs => hideInputError(formList, inputs));
// }
/////////fullphoto//////////
const photoTemplate = document.querySelector('#photo-template'); // шаблон фото карточки
const photosContainer = document.querySelector('.photos'); // секция всех фото
const popupPhotoTitleValue = photosContainer.querySelector('.photo__title'); // заголовок фото
const popupPhotoPhotoValue = photosContainer.querySelector('.photo__image'); // фото

const popupFullPhoto = document.querySelector('.popup_full_photo'); // POPUP Full
const popupFullPhotoCloseButton = popupFullPhoto.querySelector('.popup__close_btn_close'); // button Open

const popupFullPhotoImage = popupFullPhoto.querySelector('.popup__image'); // IMG 
const popupFullPhotoTitle = popupFullPhoto.querySelector('.popup__caption'); // text


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


const like = (evt) => {
    evt.target.classList.toggle('photo__like_active');
}
// ставим лайк

const remove = (evt) => {
    evt.target.closest('.photo').remove();
}
// удаляем фото

const clearInputs = () => {
    const formElement = document.querySelectorAll('.popup__form');
    const formElementArr = Array.from(formElement);
    formElementArr.forEach((item => {
        item.reset();
    }));
}
//очищение полей ввода

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

function createCard(photo, title) {
    const newPhotoCard = photoTemplate.content.querySelector('.photo').cloneNode(true); // clone 
    const newPhoto = newPhotoCard.querySelector('.photo__image'); // новое фото
    const newTitle = newPhotoCard.querySelector('.photo__title'); // новый заголовок

    newPhoto.src = photo;
    newPhoto.alt = title;
    newTitle.textContent = title;

    newPhotoCard.querySelector('.photo__like').addEventListener('click', like);
    newPhotoCard.querySelector('.photo__trash').addEventListener('click', remove);
    newPhotoCard.querySelector('.photo__image').addEventListener('click', popupFullPhotoOpen);
    return newPhotoCard
}
// создание карточки

initialCards.forEach(function(item) {
    const newCard = createCard(item.link, item.name);
    photosContainer.append(newCard);
});
// перебор массива карточек

function popupFullPhotoOpen(evt) {
    popupFullPhotoImage.src = evt.target.src;
    popupFullPhotoImage.alt = evt.target.alt;
    popupFullPhotoTitle.textContent = evt.target.alt;
    openPopup(popupFullPhoto);
};
// открытие полного фото

popupProfile.addEventListener('submit', (evt) => {
    evt.preventDefault()

    popupProfileName.textContent = popupProfileNameInput.value;
    popupProfileJob.textContent = popupProfileJobInput.value;
    
    closePopup(popupProfile);
}); 
// сохранить данные в профиль

popupProfileOpenButton.addEventListener('click', () => {
    popupProfileNameInput.value = popupProfileName.textContent;
    popupProfileJobInput.value = popupProfileJob.textContent;
    clearErrorElements(formList);
    openPopup(popupProfile);
}); 
// открыть редактирование

popupProfileCloseButton.addEventListener('click', () => {
    closePopup(popupProfile);
}); 
// закрыть ред.

popupPhotoOpenButton.addEventListener('click', () => {
    clearErrorElements(formList);
    clearInputs();
    openPopup(popupPhoto);
}); 
// открыть доб. фото

popupPhotoCloseButton.addEventListener('click', () => {
    closePopup(popupPhoto);
}); 
// закрыть доб. фото

popupPhotoForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    
    const photo = popupPhotoPhotoInput.value;
    const title = popupPhotoTitleInput.value;
    const newCard = createCard(photo, title);

    photosContainer.prepend(newCard);

    popupPhotoForm.reset()
    closePopup(popupPhoto);
}); 
// форма добавления фото

popupFullPhotoCloseButton.addEventListener('click', () => {
    closePopup(popupFullPhoto);
}); 
// закрыть просмотр фото

// const popup = document.querySelectorAll('popup_opened');

popupProfile.addEventListener('mousedown', closeWithClick);
popupPhoto.addEventListener('mousedown', closeWithClick);
popupFullPhoto.addEventListener('mousedown', closeWithClick);


