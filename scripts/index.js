import { config, initialCards } from './constants.js';
import { Card } from './card.js';
import { FormValidator } from './FormValidator.js';
// объявление переменных для popup_type_edit
const openPopupEditButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const formPopupEdit = document.querySelector('.popup__form_type_edit');
const nameInput = document.querySelector('#name');
const bioInput = document.querySelector('#bio');
const profileName = document.querySelector('.profile__name');
const profileBio = document.querySelector('.profile__bio');
// объявление переменных для popup_type_add
const formPopupAdd = document.querySelector('.popup__form_type_add');
const openPopupAddButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_type_add');
export const placeInput = document.querySelector('#place');
export const urlInput = document.querySelector('#url');
const submitPopupButton = popupAdd.querySelector('.popup__button');
// объявление переменных для карточек
const cards = document.querySelector('.cards');
//крестики
const closeButtons = document.querySelectorAll('.popup__button-closed');
//валидация
const profileValidator = new FormValidator(config, popupEdit);
const addCardValidator = new FormValidator(config, popupAdd);
profileValidator.enableValidation();
addCardValidator.enableValidation();

// функции для popup
function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', handleEscPress);
};
function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscPress);
};

// функции для popup-edit
function fillPopupEditFields() {
    nameInput.value = profileName.textContent;
    bioInput.value = profileBio.textContent;
};

//функция для обработки формы popup_type_edit
function handleFormEditSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileBio.textContent = bioInput.value;
    closePopup(popupEdit);
};

//функции для popup_type_add

function resetPopupAddForm(submitPopupButton, config) {
    placeInput.value = null;
    urlInput.value = null;
    addCardValidator.disableButton();
};

// вызовы функция для popup_type_add
openPopupAddButton.addEventListener('click', function () {
    openPopup(popupAdd);
    resetPopupAddForm(submitPopupButton, config);
});

// вызовы функция для popup_type_edit
openPopupEditButton.addEventListener('click', function () {
    openPopup(popupEdit);
    fillPopupEditFields()
});

formPopupEdit.addEventListener('submit', handleFormEditSubmit);

// крестики
closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});

// закрытие
export const handleEscPress = (evt) => {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_opened');
        closePopup(popupOpened);
    };
};

const popupCloseClickOverlay = document.querySelectorAll('.popup');
popupCloseClickOverlay.forEach((item) => {
    item.addEventListener('click', (evt) => {
        if (evt.target === evt.currentTarget) {
            closePopup(item);
        };
    });
});

initialCards.forEach((item) => {
    createCard(item);
})

function addFormSubmit(evt) {
    evt.preventDefault();
    const newCardData = {
        name: placeInput.value,
        link: urlInput.value,
    }
    createCard(newCardData);
    closePopup(popupAdd);
}

formPopupAdd.addEventListener('submit', addFormSubmit);

function createCard(data) {
    const card = new Card(data, '#cards__item');
    const cardElement = card.generateCard();
    cards.prepend(cardElement);
}

export function handleOpenPopup(link, name) {
    const popupElement = document.querySelector('.popup-image');
    const popupImagePic = document.querySelector('.popup-image__pic');
    const popupCaption = document.querySelector('.popup-image__caption');
    popupImagePic.src = link;
    popupImagePic.alt = name;
    popupCaption.textContent = name;
    openPopup(popupElement)
    document.addEventListener('keydown', handleEscPress);
}
