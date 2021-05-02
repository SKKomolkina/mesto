/////////////POPUP PROFILE/////////////
const popupProfileForm = document.querySelector('.popup__container-profile'); // форма popup
const buttonOpenEdit = document.querySelector('.profile__btn-edit'); // кнопка открыть ред.
const buttonCloseEdit = document.querySelector('.popup__btn-close_profile'); // кнопка "крестик", закрыть ред.
const popupEdit = document.querySelector('.popup__profile'); // окно редактирования

const profileName = document.querySelector('.profile__name'); // отображение имени на гл.стр.
const profileJob = document.querySelector('.profile__about'); // отображение деятельности на гл.стр.
const nameInput = document.querySelector('.popup__form_type_name'); // ввод имени
const jobInput = document.querySelector('.popup__form_type_about'); // ввод деятельности


/////////////PHOTO TEMPLATE/////////////
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    }
];


const photoTemplate = document.querySelector('#photo-template'); // шаблон фото карточки
const photosContainer = document.querySelector('.photos'); // секция всех фото


/////////////POPUP PHOTO/////////////
const popupPhotoForm = document.querySelector('.popup__container-photo'); // форма popup

const buttonOpenAddPhoto = document.querySelector('.profile__btn-add'); // кнопка открыть фото доб.
const buttonCloseAddPhoto = document.querySelector('.popup__btn-close_photo'); // кнопка "крестик", закрыть фото доб.
const popupPhoto = document.querySelector('.popup__photo'); // окно доб. фото
const savePhoto = document.querySelector('.popup__save');

function createCard(photo, title) {
    const newPhotoCard = photoTemplate.content.querySelector('.photo').cloneNode(true); // clone 
    const newPhoto = newPhotoCard.querySelector('.photo__image'); // новое фото
    const newTitle = newPhotoCard.querySelector('.photo__title'); // новый заголовок
    const cardRemoveButton = newPhotoCard.querySelector('.photo__trash'); // delete photoCard
    const likeButton = newPhotoCard.querySelector('.photo__icon'); // like

    newPhoto.src = photo;
    newTitle.textContent = title;

    likeButton.addEventListener('click', function (evt) {
        const like = evt.target;
        like.classList.toggle('photo__like_active');
    });

    function handlerRemoveCard(evt) {
        evt.target.closest('.photo').remove()
    };
    cardRemoveButton.addEventListener('click', handlerRemoveCard);

    return newPhotoCard
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

    photosContainer.append(newCard);

    photoInput.value = '';
    titleInput.value = ''
}

popupPhotoForm.addEventListener('submit', handleAddPhoto);


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


