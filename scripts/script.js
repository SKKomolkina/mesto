let buttonEditOpen = document.querySelector('.profile__btn-edit'); // кнопка открыть ред.
let buttonEditClose = document.querySelector('.popup__cross'); // кнопка "крестик", закрыть ред.
let popup = document.querySelector('.popup'); // окно редактирования
let formElement = document.querySelector('.popup__container'); // форма редактирования
let profileName = document.querySelector('.profile__name'); // отображение имени на гл.стр.
let profileJob = document.querySelector('.profile__about'); // отображение деятельности на гл.стр.
let nameInput = document.querySelector('.popup__form_type_name'); // ввод имени
let jobInput = document.querySelector('.popup__form_type_about'); // ввод деятельности


function openEdit () {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
} 

function closeEdit () {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
	evt.preventDefault(); 
    
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closeEdit ();
}

formElement.addEventListener('submit', formSubmitHandler);

buttonEditOpen.addEventListener('click', openEdit); // открыть редактирование
buttonEditClose.addEventListener('click', closeEdit); // закрыть ред.