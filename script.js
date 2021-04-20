let buttonEditOpen = document.querySelector('.profile__btn_edit');
let buttonEditClose = document.querySelector('.popup__cross');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__container')
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__about');
let nameInput = document.querySelector('.popup__input-name')
let jobInput = document.querySelector('.popup__input-about')

function openEdit () {
    popup.classList.remove('popup__open');
} 
buttonEditOpen.addEventListener('click', openEdit);

function closeEdit () {
    popup.classList.add('popup__open');
}
buttonEditClose.addEventListener('click', closeEdit);


formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popup.classList.add('popup__open');
});
