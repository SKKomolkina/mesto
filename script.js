const buttonEditOpen = document.querySelector('.profile__btn_edit');
const buttonEditClose = document.querySelector('.popup__cross');
const popup = document.querySelector('.popup__closed');
const formElement = document.querySelector('.popup__input')
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__about');
const nameInput = document.querySelector('.popup__input-name')
const jobInput = document.querySelector('.popup__input-about')

function openEdit () {
    popup.classList.remove('popup__closed');
} 
buttonEditOpen.addEventListener('click', openEdit);

function closeEdit () {
    popup.classList.add('popup__closed');
}
buttonEditClose.addEventListener('click', closeEdit);


// Находим форму в DOM

// Воспользуйтесь методом querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
	evt.preventDefault();
    // let inputName = nameInput.value;
    // let inputjob = jobInput.value;

	// Выберите элементы, куда должны быть вставлены значения полей

	// Вставьте новые значения с помощью textContent
    // name.innerHTML = nameInput.value;
    // job.innerHTML = jobInput.value;

    name.textContent = nameInput.va;
    
    formElement.addEventListener('submit', formSubmitHandler);

    popup.classList.remove('.popup__closed');
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»







/*
const formElement = document.querySelector('.popup__container');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

function formSubmitHandler (evt) {
    evt.preventDefault();
    const inputName = document.querySelector('.popup__input-name');
    const inputAbout = document.querySelector('.popup__input-about');
    inputName.textContent = profileName.value;
    inputAbout.textContent = profileAbout.value;
}
    
formElement.addEventListener('submit', formSubmitHandler);*/