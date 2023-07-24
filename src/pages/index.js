import './index.css';
import { apiConfig, config } from '../utils/constants.js';
import Card from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/API.js';
import PopupWithRemoval from '../components/PopupWithRemoval.js';
// объявление переменных для popup_type_edit
const openPopupEditButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const profileName = document.querySelector('.profile__name');
const profileBio = document.querySelector('.profile__bio');
const avatar = document.querySelector('.profile__avatar');
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

const popupAvatar = document.querySelector('.popup_type_avatar')

// попап с карточками
const popupImage = document.querySelector('.popup-image')
//валидация
const profileValidator = new FormValidator(config, popupEdit);
const addCardValidator = new FormValidator(config, popupAdd);
const avatarValidator = new FormValidator(config, popupAvatar);
avatarValidator.enableValidation();
profileValidator.enableValidation();
addCardValidator.enableValidation();
let userId;
const popupDelete = document.querySelector('.popup_type_delete')
const changeAvatarButton = document.querySelector('.profile__avatar-group')
const user = new UserInfo({
    nameSelector: profileName,
    bioSelector: profileBio,
    avatarSelector: '.profile__avatar',
})

const api = new Api(apiConfig);
Promise.all([api.getInfo(), api.getInitialCards()])
    .then(([resUser, resCard]) => {
        userId = resUser._id;
        user.setUserInfo(resUser);
        user.setUserAvatar(resUser);
        defaultCards.renderItems(resCard, userId);
    })

const popupWithImage = new PopupWithImage(popupImage);

popupWithImage.setEventListeners();

function createCard(data, user) {
    const card = new Card({
        data: data, userId: user, templateSelector: cardsTemplate,
        handleCardClick: () => {
            popupWithImage.open(data);
        },

        handleCardDelete: (cardId, cardElement) => {
            popupFormDelete.open(cardId, cardElement);
        },

        handleCardLike: (cardId) => {
            api.putCardLike(cardId)
                .then((res) => {
                    card.renderCardLike(res)
                })
        },

        handleCardDeleteLike: (cardId) => {
            api.deleteCardLike(cardId)
                .then((res) => {
                    card.renderCardLike(res)
                })
                .catch((err) => alert(err))
        }
    });
    return card.generateCard();
}

const defaultCards = new Section({
    renderer: (item, userID) => {
        defaultCards.append(createCard(item, userID));
    }
}, cards)

const placePopup = new PopupWithForm(popupAdd, (data) => {
    placePopup.renderLoading(true, 'Сохранение...');
    api.addNewCard(data)
        .then((res) => {
            defaultCards.prepend(createCard(res, userId));
            placePopup.close();
        })
        .catch((err) => alert(err))
        .finally(() => {
            placePopup.renderLoading(false);
        })
})
placePopup.setEventListeners();

openPopupAddButton.addEventListener('click', () => {
    placePopup.open();
    addCardValidator.disableButton();
});



const aboutPopup = new PopupWithForm(popupEdit, (data) => {
    aboutPopup.renderLoading(true, 'Сохранение...');
    api.editProfile(data)
        .then((res) => {
            user.setUserInfo(res);
            aboutPopup.close();
        })
        .catch((err) => alert(err))
        .finally(() => {
            aboutPopup.renderLoading(false);
        })
})

openPopupEditButton.addEventListener('click', () => {
    const userInfo = user.getUserInfo();
    nameInput.value = userInfo.name;
    bioInput.value = userInfo.about;
    aboutPopup.open();
    profileValidator.disableButton();
})
aboutPopup.setEventListeners();


const popupFormDelete = new PopupWithRemoval(popupDelete, {
    submitCallback: (id, card) => {
        popupFormDelete.renderLoading(true, 'Удаление...');
        api.deleteCard(id)
            .then(() => {
                card.deleteCard();
                popupFormDelete.close();
            })
            .catch((err) => alert(err))
            .finally(() => {
                popupFormDelete.renderLoading(false);
            })
    }
})
popupFormDelete.setEventListeners();

const avatarPopup = new PopupWithForm(popupAvatar, (data) => {
    avatarPopup.renderLoading(true, 'Загрузка...');
    api.setUserAvatar(data)
        .then((res) => {
            user.setUserAvatar(res);
            avatarPopup.close();
        })
        .catch((err) => alert(err))
        .finally(() => {
            avatarPopup.renderLoading(false);
        })
})
avatarPopup.setEventListeners();
changeAvatarButton.addEventListener('click',  () => {
    avatarPopup.open();
    avatarValidator.disableButton();
})