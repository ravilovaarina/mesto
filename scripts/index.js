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
const submitPopupButton = document.querySelector('.popup__button');
// объявление переменных для карточек
const cardTemplate = document.querySelector('#cards__item').content;
const cardsElement = cardTemplate.querySelector('.cards__item');
const cards = document.querySelector('.cards');

//объявление переменных для попапа с фотграфиями
const popupImage = document.querySelector('.popup-image');
const popupPic = document.querySelector('.popup-image__pic');
const popupCaption = document.querySelector('.popup-image__caption');
//крестики
const closeButtons = document.querySelectorAll('.popup__button-closed');

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
function addFormSubmit(evt) {
    evt.preventDefault();
    cards.prepend(createCard(urlInput.value, placeInput.value));
    closePopup(popupAdd);
}
function resetPopupAddForm(submitPopupButton, config) {
    placeInput.value = null;
    urlInput.value = null;
    console.log(submitPopupButton)
    disableButton(submitPopupButton,config);
};

// вызовы функция для popup_type_add
openPopupAddButton.addEventListener('click', function () {
    openPopup(popupAdd);
    resetPopupAddForm(submitPopupButton, config);
});

formPopupAdd.addEventListener('submit', addFormSubmit);

// вызовы функция для popup_type_edit
openPopupEditButton.addEventListener('click', function () {
    openPopup(popupEdit);
    fillPopupEditFields()
});

formPopupEdit.addEventListener('submit', handleFormEditSubmit);

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
    pic.addEventListener('keydown', function (evt) {
        if (evt.key === 'Escape') {
            closePopup(popupImage);
          };
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

// закрытие
const handleEscPress = (evt) => {
    const popupOpened = document.querySelector('.popup_opened');
    if (evt.key === 'Escape') {
      closePopup(popupOpened);
    };
  };

  const popupCloseClickOverlay = document.querySelectorAll('.popup'); 
  popupCloseClickOverlay.forEach((item) => {
    item.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget) {
        const overlayClosest = evt.target.closest('.popup');
        closePopup(overlayClosest);
      };
    });
  });