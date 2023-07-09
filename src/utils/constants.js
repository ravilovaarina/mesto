const initialCards = [
    {
        place: '2004',
        link: 'https://images.unsplash.com/photo-1561871733-40a3338b8cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80'
    },
    {
        place: '2005',
        link: 'https://images.unsplash.com/photo-1598461336473-b0cc035d4e35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1768&q=80'
    },
    {
        place: '2006',
        link: 'https://images.unsplash.com/photo-1601711187757-06a086b27e54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=792&q=80'
    },
    {
        place: '2007',
        link: 'https://images.unsplash.com/photo-1585022564445-3523e9b75f26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        place: '2008',
        link: 'https://images.unsplash.com/photo-1575795325632-377ca781cf78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2932&q=80'
    },
    {
        place: '2009',
        link: 'https://images.unsplash.com/photo-1556515268-97d056bdb5a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1768&q=80'
    }
];

const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error'
}

export { initialCards, config }