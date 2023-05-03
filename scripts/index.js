// объявление переменных для popup-edit
const buttonPopupOpen = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const buttonPopupclose = document.querySelector('.popup__button-closed');
const formPopup = document.querySelector('.popup__form');
const nameInput = document.getElementById('name');
const bioInput = document.getElementById('bio');
const profileName = document.querySelector('.profile__name');
const profileBio = document.querySelector('.profile__bio');

// функции для popup-edit
function popupClose() {
    popup.classList.remove('popup_opened');
};
function popupOpen() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    bioInput.value = profileBio.textContent;
};

//функция для обработки формы popup-edit
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileBio.textContent = bioInput.value;
    popupClose();
};
// вызовы функция для popup-edit
buttonPopupOpen.addEventListener('click', popupOpen);

buttonPopupclose.addEventListener('click', popupClose);

formPopup.addEventListener('submit', handleFormSubmit);

