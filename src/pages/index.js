import './index.css';
import { config, initialCards } from '../utils/constants.js';
import Card from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
// объявление переменных для popup_type_edit
const openPopupEditButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const profileName = document.querySelector('.profile__name');
const profileBio = document.querySelector('.profile__bio');
const nameInput = document.querySelector('#name');
const bioInput = document.querySelector('#bio');
// объявление переменных для popup_type_add
const openPopupAddButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_type_add');
export const placeInput = document.querySelector('#place');
export const urlInput = document.querySelector('#url');
// объявление переменных для карточек
const cards = document.querySelector('.cards');
const cardsTemplate = document.querySelector('#cards__item').content
const imageInPopup = document.querySelector(".popup-image__pic");
const nameOfImageInPopup = document.querySelector(".popup-image__caption");

// попап с карточками
const popupImage = document.querySelector('.popup-image')
//валидация
const profileValidator = new FormValidator(config, popupEdit);
const addCardValidator = new FormValidator(config, popupAdd);
profileValidator.enableValidation();
addCardValidator.enableValidation();

const popupWithImage = new PopupWithImage(popupImage, imageInPopup, nameOfImageInPopup);
const handleCardClick = (placeImage, placeName) => {
    popupWithImage.open(placeImage, placeName);
}

popupWithImage.setEventListeners();

function createCard(place) {
    const card = new Card(place, cardsTemplate, handleCardClick);
    const newPlace = card.generateCard();

    defaultCards.setItem(newPlace);
}

const defaultCards = new Section({
    items: initialCards,
    renderer: (place) => {
        createCard(place);
    }
}, cards)
defaultCards.renderItems();

const placePopup = new PopupWithForm(popupAdd, (place) => {
    createCard(place);
})

placePopup.setEventListeners();

openPopupAddButton.addEventListener('click', () => {
    placePopup.open();
    addCardValidator.disableButton();
});

const user = new UserInfo({
    nameSelector: profileName,
    bioSelector: profileBio
})

const aboutPopup = new PopupWithForm(popupEdit, (info) => {
    console.log(info);
    user.setUserInfo(info);
})

openPopupEditButton.addEventListener('click', () => {
    const userInfo = user.getUserInfo();
    nameInput.value = userInfo.name;
    bioInput.value = userInfo.bio;
    aboutPopup.open();
    profileValidator.disableButton();
})
aboutPopup.setEventListeners();