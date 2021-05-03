/////////////POPUP PROFILE/////////////
const popupProfileForm = document.querySelector('.popup__container-profile'); // форма popup
const buttonOpenEdit = document.querySelector('.profile__btn-edit'); // кнопка открыть ред.
const buttonCloseEdit = document.querySelector('.popup_btn_close_profile'); // кнопка "крестик", закрыть ред.
const popupEdit = document.querySelector('.popup-profile'); // окно редактирования

const profileName = document.querySelector('.profile__name'); // отображение имени на гл.стр.
const profileJob = document.querySelector('.profile__about'); // отображение деятельности на гл.стр.
const nameInput = document.querySelector('.popup__form_type_name'); // ввод имени
const jobInput = document.querySelector('.popup__form_type_about'); // ввод деятельности


/////////////POPUP PHOTO/////////////
const popupPhotoForm = document.querySelector('.popup__container-photo'); // форма popup

const buttonOpenAddPhoto = document.querySelector('.profile__btn-add'); // кнопка открыть фото доб.
const buttonCloseAddPhoto = document.querySelector('.popup_btn_close-photo'); // кнопка "крестик", закрыть фото доб.
const popupPhoto = document.querySelector('.popup-photo'); // окно доб. фото
const savePhoto = document.querySelector('.popup__save');


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


const photoTemplate = document.querySelector('#photo-template'); // шаблон фото карточки
const photosContainer = document.querySelector('.photos'); // секция всех фото

const fullPhotoPopup = document.querySelector('.popup_full_photo');
const closefullPhotoPopup = document.querySelector('.popup_full_photo_btn-close')
const fullPhoto = document.querySelector('.popup__image');
const fullTitle = document.querySelector('.popup__caption');
const closeFullPhotoPopup = document.querySelector('.popup_full_photo_btn-close');

function createCard(photo, title) {
    const newPhotoCard = photoTemplate.content.querySelector('.photo').cloneNode(true); // clone 
    const newPhoto = newPhotoCard.querySelector('.photo__image'); // новое фото
    const newTitle = newPhotoCard.querySelector('.photo__title'); // новый заголовок

    newPhoto.src = photo;
    newPhoto.alt = title;
    newTitle.textContent = title;

    newPhotoCard.querySelector('.photo__icon').addEventListener('click', like);
    newPhotoCard.querySelector('.photo__trash').addEventListener('click', remove);
    newPhotoCard.querySelector('.photo__image').addEventListener('click', openFullPhoto);
    return newPhotoCard
}

const like = (evt) => {
    evt.target.classList.toggle('photo__like_active');
}

const remove = (evt) => {
    evt.target.closest('.photo').remove();
}

const openFullPhoto = (evt) => {
    fullPhoto.src = evt.target.src;
    fullPhoto.alt = evt.target.alt;
    fullTitle.textContent = evt.target.alt;
    fullPhotoPopup.classList.add('popup_opened');
}

function closeFullPhoto () {
    fullPhotoPopup.classList.remove('popup_opened');
}

initialCards.forEach(function(item) {
    const newCard = createCard(item.link, item.name);
    photosContainer.append(newCard);
});


const titleInput = document.querySelector('.popup__form_type_title'); // форма ввода заголовка
const photoInput = document.querySelector('.popup__form_type_image'); // форма ссылки 
const titleValue = photosContainer.querySelector('.photo__title'); // заголовок фото
const photoValue = photosContainer.querySelector('.photo__image'); // фото

function handleAddPhoto(evt) {
    evt.preventDefault();
    
    const photo = photoInput.value;
    const title = titleInput.value;
    const newCard = createCard(photo, title);

    photosContainer.prepend(newCard);

    photoInput.value = '';
    titleInput.value = '';

    closeAdd();
}

popupPhotoForm.addEventListener('submit', handleAddPhoto);
closeFullPhotoPopup.addEventListener('click', closeFullPhoto);


/////////////POPUP PROFILE functional/////////////
function openEdit() {
    popupEdit.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function closeEdit() {
    popupEdit.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closeEdit();
}

popupEdit.addEventListener('submit', formSubmitHandler); // сохранить данные в профиль

buttonOpenEdit.addEventListener('click', openEdit); // открыть редактирование
buttonCloseEdit.addEventListener('click', closeEdit); // закрыть ред.


/////////////POPUP PHOTO functional/////////////
function openAdd() {
    popupPhoto.classList.add('popup_opened');
}

function closeAdd() {
    popupPhoto.classList.remove('popup_opened');
}

buttonOpenAddPhoto.addEventListener('click', openAdd); // открыть доб. фото
buttonCloseAddPhoto.addEventListener('click', closeAdd); // закрыть доб. фото