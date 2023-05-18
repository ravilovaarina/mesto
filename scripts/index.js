// объявление переменных для popup_type_edit
const openPopupEditButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const formPopupEdit = document.querySelector('.popup__form_type_edit');
const nameInput = document.querySelector('#name');
const bioInput = document.querySelector('#bio');
const profileName = document.querySelector('.profile__name');
const profileBio = document.querySelector('.profile__bio');
// объявление переменных для popup_type_add
const openPopupAddButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_type_add');
const formPopupAdd = document.querySelector('.popup__form_type_add');
const placeInput = document.querySelector('#place');
const urlInput = document.querySelector('#url');
// объявление переменных для карточек
const cardTemplate = document.querySelector('#cards__item').content;
const cardsElement = cardTemplate.querySelector('.cards__item');
const cards = document.querySelector('.cards');
const initialCards = [
    {
        name: '2009',
        link: 'https://images.unsplash.com/photo-1561871733-40a3338b8cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80'
    },
    {
        name: '2008',
        link: 'https://images.unsplash.com/photo-1598461336473-b0cc035d4e35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1768&q=80'
    },
    {
        name: '2007',
        link: 'https://images.unsplash.com/photo-1601711187757-06a086b27e54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=792&q=80'
    },
    {
        name: '2006',
        link: 'https://images.unsplash.com/photo-1585022564445-3523e9b75f26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        name: '2005',
        link: 'https://images.unsplash.com/photo-1575795325632-377ca781cf78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2932&q=80'
    },
    {
        name: '2004',
        link: 'https://images.unsplash.com/photo-1556515268-97d056bdb5a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1768&q=80'
    }
];
//объявление переменных для попапа с фотграфиями
const popupImage = document.querySelector('.popup-image');
const popupPic = document.querySelector('.popup-image__pic');
const popupCaption = document.querySelector('.popup-image__caption');
//крестики
const closeButtons = document.querySelectorAll('.popup__button-closed');

// функции для popup
function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
};
function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
};

// функции для popup-edit
function openPopupEdit() {
    nameInput.value = profileName.textContent;
    bioInput.value = profileBio.textContent;
};

//функция для обработки формы popup_type_edit
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileBio.textContent = bioInput.value;
    closePopup(popupEdit);
};

//функции для popup_type_add
function addFormSubmit(evt) {
    evt.preventDefault();
    cards.prepend(createCard(urlInput.value, placeInput.value));
    closePopup(popupAdd);
}
function openPopupAdd() {
    placeInput.value = null;
    urlInput.value = null;
};

// вызовы функция для popup_type_add
openPopupAddButton.addEventListener('click', function () {
    openPopup(popupAdd);
    openPopupAdd()
});

formPopupAdd.addEventListener('submit', addFormSubmit);

// вызовы функция для popup_type_edit
openPopupEditButton.addEventListener('click', function () {
    openPopup(popupEdit);
    openPopupEdit()
});

formPopupEdit.addEventListener('submit', handleFormSubmit);

// создание карточек
function createCard(link, name) {
    const newCard = cardsElement.cloneNode(true);
    newCard.querySelector('.cards__pic').src = link;
    newCard.querySelector('.cards__pic').alt = name;
    newCard.querySelector('.cards__text').textContent = name;

    const trash = newCard.querySelector('.cards__button-delete'); // удаление карточки
    trash.addEventListener('click', deleteCard);
    
    const pic = newCard.querySelector('.cards__pic'); // показ фотографии
    pic.addEventListener('click', {
        handleEvent(evt) {
        openPopup(popupImage)
        showPhoto(evt);
        }
    });

    const likeButton = newCard.querySelector('.cards__button-like') // лайк
    likeButton.addEventListener('click', likeToggle);
    return newCard;
}
// карточки при загрузке
initialCards.forEach((card) => {
    cards.append(createCard(card.link, card.name));
});
// крестики
closeButtons.forEach((button) => { 
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

// удаление карточкек
function deleteCard(evt) {
    const card = evt.target.closest('.cards__item');
    card.remove();
    console.log(card)
}
// лайк на карточках
function likeToggle(evt) {
    evt.target.classList.toggle('cards__button-like_active');
}
// функция для увеличения фотографии
function showPhoto(evt) {
    popupPic.src = evt.target.src;
    const card = evt.target.closest('.cards__item');
    popupCaption.textContent = card.querySelector('.cards__text').textContent;
    popupPic.alt = card.querySelector('.cards__text').textContent;
}