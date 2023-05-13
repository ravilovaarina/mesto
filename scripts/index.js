// объявление переменных для popup_type_edit
const openPopupEditButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const formPopupEdit = document.querySelector('.popup__form_type_edit');
const nameInput = document.querySelector('#name');
const bioInput = document.querySelector('#bio');
const profileName = document.querySelector('.profile__name');
const profileBio = document.querySelector('.profile__bio');
const closePopupEditButton = document.querySelector('.popup__button-closed_type_edit');
// объявление переменных для popup_type_add
const openPopupAddButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_type_add');
const formPopupAdd = document.querySelector('.popup__form_type_add');
const placeInput = document.querySelector('#place');
const urlInput = document.querySelector('#url');
const closePopupAddButton = document.querySelector('.popup__button-closed_type_add');
// объявление переменных для карточек
const cardTemplate = document.querySelector('#cards__item').content;
const cards = document.querySelector('.cards');
let initialCards = [
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


// функции для popup
function popupOpen(popupElement) {
    popupElement.classList.add('popup_opened');
};
function popupClose(popupElement) {
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
    popupClose(popupEdit);
};

//функции для popup_type_add
function addFormSubmit(evt) {
    evt.preventDefault();
    let newCard = {
        name: placeInput.value,
        link: urlInput.value
    };
    initialCards.unshift(newCard);

    const cardsElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
    cardsElement.querySelector('.cards__pic').src = initialCards[0].link;
    cardsElement.querySelector('.cards__text').textContent = initialCards[0].name;
    cards.prepend(cardsElement);

    initialCards.forEach(function () {
        const trash = cardsElement.querySelector('.cards__button-delete');
        trash.addEventListener('click', deleteCard);
    })
}
// вызовы функция для popup_type_add
openPopupAddButton.addEventListener('click', function () {
    popupOpen(popupAdd);
});

closePopupAddButton.addEventListener('click', function () {
    popupClose(popupAdd);
})

// вызовы функция для popup_type_edit
openPopupEditButton.addEventListener('click', function () {
    popupOpen(popupEdit);
});
openPopupEditButton.addEventListener('click', openPopupEdit);

closePopupEditButton.addEventListener('click', function () {
    popupClose(popupEdit);
})

formPopupEdit.addEventListener('submit', handleFormSubmit);

// вызовы функция для popup_type_add
formPopupAdd.addEventListener('submit', addFormSubmit);

// карточки
for (let i = 0; i < initialCards.length; i += 1) {
    const cardsElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
    cardsElement.querySelector('.cards__pic').src = initialCards[i].link;
    cardsElement.querySelector('.cards__text').textContent = initialCards[i].name;
    cards.append(cardsElement);
    const trash = cardsElement.querySelector('.cards__button-delete');
    trash.addEventListener('click', deleteCard);
}

// удаление карточкек
function deleteCard(evt) {
    const card = evt.target.closest('.cards__item');
    card.remove();
    console.log(card)
}