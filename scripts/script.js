/////////////POPUP PROFILE/////////////
const buttonOpenEdit = document.querySelector('.profile__btn-edit'); // кнопка открыть ред.
const buttonCloseEdit = document.querySelector('.popup__btn-close_profile'); // кнопка "крестик", закрыть ред.
const popupEdit = document.querySelector('.popup__profile'); // окно редактирования

const profileName = document.querySelector('.profile__name'); // отображение имени на гл.стр.
const profileJob = document.querySelector('.profile__about'); // отображение деятельности на гл.стр.
const nameInput = document.querySelector('.popup__form_type_name'); // ввод имени
const jobInput = document.querySelector('.popup__form_type_about'); // ввод деятельности


const popupProfileForm = document.querySelector('.popup__container'); // форма popup

/////////////POPUP PHOTO/////////////
const buttonOpenAddPhoto = document.querySelector('.profile__btn-add'); // кнопка открыть фото доб.
const buttonCloseAddPhoto = document.querySelector('.popup__btn-close_photo'); // кнопка "крестик", закрыть фото доб.
const popupPhoto = document.querySelector('.popup__photo'); // окно доб. фото

const photosContainer = document.querySelector('.photos'); // секция всех фото
const likeButton = photosContainer.querySelectorAll('.photo__icon'); //like

const titleValue = document.querySelector('.photo__title'); // заголовок фото
const photoValue = document.querySelector('.photo__image'); // фото
const photoInput = document.querySelector('.popup__form_type_image'); // форма ссылки фото
const titleInput = document.querySelector('.popup__form_type_title'); // форма ввода заголовка

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


/////////////POPUP PROFILE functional/////////////
function openEdit () {
    popupEdit.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
} 

function closeEdit () {
    popupEdit.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
	evt.preventDefault(); 
    
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closeEdit ();
}

popupEdit.addEventListener('submit', formSubmitHandler); // сохранить данные в профиль

buttonOpenEdit.addEventListener('click', openEdit); // открыть редактирование
buttonCloseEdit.addEventListener('click', closeEdit); // закрыть ред.


/////////////POPUP PHOTO functional/////////////
function openAdd () {
    popupPhoto.classList.add('popup_opened');
}

function closeAdd () {
    popupPhoto.classList.remove('popup_opened');
}

buttonOpenAddPhoto.addEventListener('click', openAdd); // открыть доб. фото
buttonCloseAddPhoto.addEventListener('click', closeAdd); // закрыть доб. фото



