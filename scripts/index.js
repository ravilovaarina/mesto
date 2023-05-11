// объявление переменных для popup-edit
const buttonPopupOpen = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup');
const buttonPopupclose = document.querySelector('.popup__button-closed');
const formPopup = document.querySelector('.popup__form');
const nameInput = document.querySelector('#name');
const bioInput = document.querySelector('#bio');
const profileName = document.querySelector('.profile__name');
const profileBio = document.querySelector('.profile__bio');
// объявление переменных для карточек
const cardTemplate = document.querySelector('#cards__item').content;
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
buttonPopupOpen.addEventListener('click', popupOpen(popupEdit));

buttonPopupclose.addEventListener('click', popupClose(popupEdit));

formPopup.addEventListener('submit', handleFormSubmit);

// карточки
for (let i = 0; i < initialCards.length; i += 1){
    const cardsElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
    cardsElement.querySelector('.cards__pic').src = initialCards[i].link;
    cardsElement.querySelector('.cards__text').textContent = initialCards[i].name;
    cards.append(cardsElement); 
}


