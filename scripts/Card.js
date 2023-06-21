const popupElement = document.querySelector('.popup-image');
const popupImage = document.querySelector('.popup-image__pic');
const popupCaption = document.querySelector('.popup-image__caption');
const popupCloseButton = document.querySelector('.popup-image__button-closed');

export class Card {
    constructor(data, templateSelector) {
        this._caption = data.name;
        this._scr = data.link;
        this._alt = data.name;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const CardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.cards__item')
            .cloneNode(true);

        return CardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.cards__pic').src = this._scr;
        this._element.querySelector('.cards__pic').alt = this._alt;
        this._element.querySelector('.cards__text').textContent = this._caption;

        return this._element;
    }

    _handleOpenPopup() {
        popupImage.src = this._scr;
        popupImage.alt = this._alt;
        popupCaption.textContent = this._caption;
        popupElement.classList.add('popup_opened');
    }

    _handleClosePopup() {
        popupImage.src = '';
        popupImage.alt = '';
        popupCaption.textContent = '';
        popupElement.classList.remove('popup_opened');
    }

    _setEventListeners() {
        this._element.querySelector('.cards__pic').addEventListener('click', () => {
            this._handleOpenPopup();
        });
        popupCloseButton.addEventListener('click', () => {
            this._handleClosePopup();
        })
        this._element.querySelector('.cards__button-like').addEventListener('click', () => {
            this._likeToggle();
        })

        this._element.querySelector('.cards__button-delete').addEventListener('click', () => {
            this._deleteCard();
        })
    }

    _likeToggle() {
        this._element.querySelector('.cards__button-like').classList.toggle('cards__button-like_active');
    }

    _deleteCard() {
        this._element.remove();
    }
}

